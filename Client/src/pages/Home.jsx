import React, {useState, useEffect}from 'react';

import {Loader, Card, FormField} from '../Componenets'; // Ensure these components are properly defined

const RenderCards =({data , title}) =>{
  if(data?.length > 0 ) 
    return data.map((post) => <Card key={post.id} {...post}/>)

  return(
    <h2 className="mt-5 font-bold tet-[#6449ff] text-xl
    uppercase">{title}</h2>
  )
}

const Home = () => {
  
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('abc');
  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328]
          text-[32px]">
            The community Showcase
          </h1>
          <p className="mt-2 text-[#666e75]
          text-[14px] max-w[500px]">
               Unleash your imagination with our revolutionary image-generating app 
               powered by DALL-E AI. Whether you're an artist, designer, or just 
               someone who loves to explore creative possibilities, our app transforms 
               text prompts into stunning, unique images in an instant.
          </p>
          </div>
          <div className="mt-16">
            <FormField/>
          </div>
          <div className="mt-10">
            {loading ? (
              <div className="flex justify-center items-center">
                <Loader/>
                </div>
              ) : (
                <>
                {searchText && (
                  <h2 classname="font-medium text-[#666e75]
                  text-xl mb-3">
                    Showing results for <span className="text-[#222328]">
                      {searchText}
                    </span>
                  </h2>
                )}
                </>
              )}
              <div className="grid lg:grid-col-4 sm:grid-cols-3
              xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                  <RenderCards
                  data={[]}
                  title = "No search Results Found"

                  />
                ) : (
                  <RenderCards
                    data={[]}
                    title = "No Posts Found"

                    />
                )}
              </div>
          
        </div>
        </section>
            </div>
  )
}

export default Home
