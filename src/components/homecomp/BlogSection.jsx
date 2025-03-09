

function BlogSection() {

  const posts =
    [
      {
        "id": 1,
        "title": "A Day in Mount Fuji",
        "location": "Japan",
        "googleMapsUrl": "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        "PostedDate": "12 Jan, 2021",
        "image": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/490000/490338-lake-kawaguchi.jpg",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad non dolore consectetur nesciunt, tempore unde a, cumque itaque soluta maxime repellat culpa facilis debitis, ipsam illum adipisci. Accusantium, harum."
      },
      {
        "id": 2,
        "title": "Sunrise at Grand Canyon",
        "location": "USA",
        "googleMapsUrl": "https://goo.gl/maps/Y1WbG6JWrB62",
        "PostedDate": "18 Feb, 2021",
        "image": "https://www.grandcanyontrust.org/wp-content/uploads/2024/07/Grand-Canyon-National-Park-Sunset-Yavapai-Point-K-Thomas-National-Park-Service900x450.jpg",
        "Description": "Watching the sunrise over the Grand Canyon was a mesmerizing experience. The hues of red and orange painted the sky beautifully."
      },
      {
        "id": 3,
        "title": "Exploring the Streets of Paris",
        "location": "France",
        "googleMapsUrl": "https://goo.gl/maps/Qq1Kf1nEJzT2",
        "PostedDate": "5 Mar, 2021",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/99/4f/cd/caption.jpg?w=1800&h=1000&s=1&cx=885&cy=590&chk=v1_e3d8683e7000393d4844",
        "Description": "Paris is a city of art, culture, and history, and I had a great time exploring its vibrant streets."
      },
      {
        "id": 4,
        "title": "Beachside Bliss in Bali",
        "location": "Indonesia",
        "googleMapsUrl": "https://goo.gl/maps/R2hX1N6L3wH2",
        "PostedDate": "20 Apr, 2021",
        "image": "https://media.cntraveler.com/photos/678fba9c4251d3fff805e4ca/16:9/w_1920",
        "Description": "The crystal-clear waters, golden sands, and lush greenery made my Bali trip an unforgettable paradise escape."
      },
      {
        "id": 5,
        "title": "The Northern Lights in Norway",
        "location": "Norway",
        "googleMapsUrl": "https://goo.gl/maps/Fp5KX8fK8qK2",
        "PostedDate": "15 May, 2021",
        "image": "https://media2.thrillophilia.com/images/photos/000/369/700/original/1615981454_shutterstock_1120772963.jpg?w=753&h=450&dpr=1.0",
        "Description": "Witnessing the magical dance of the Northern Lights in Tromsø, Norway, was truly a once-in-a-lifetime experience."
      },
      {
        "id": 6,
        "title": "Santorini’s Stunning Sunsets",
        "location": "Greece",
        "googleMapsUrl": "https://goo.gl/maps/ZZdB9k1x2W92",
        "PostedDate": "10 Jun, 2021",
        "image": "https://www.thireasuites.com/blog/user/pages/01.home/04.santorini-sunset/santorini-sunset02.jpg",
        "Description": "The breathtaking white-and-blue architecture of Santorini, paired with its spectacular sunsets, made my trip unforgettable."
      },
      {
        "id": 7,
        "title": "Safari Adventure in Kenya",
        "location": "Kenya",
        "googleMapsUrl": "https://goo.gl/maps/W3x6E1i9J2Q2",
        "PostedDate": "22 Jul, 2021",
        "image": "https://www.kabiraugandasafaris.com/wp-content/uploads/2021/09/Amboseli-National-Park-safari-600x400.jpg",
        "Description": "Seeing the majestic wildlife of the African savanna up close was an incredible and humbling experience."
      },
      {
        "id": 8,
        "title": "Walking the Great Wall of China",
        "location": "China",
        "googleMapsUrl": "https://goo.gl/maps/Xt6Jv5zF9yF2",
        "PostedDate": "30 Aug, 2021",
        "image": "https://www.savoredjourneys.com/wp-content/uploads/2015/04/great-wall-china-w2.jpg",
        "Description": "Trekking the Great Wall of China, with its endless landscapes and historical significance, was an adventure of a lifetime."
      },
      {
        "id": 9,
        "title": "Ice Cave Exploration in Iceland",
        "location": "Iceland",
        "googleMapsUrl": "https://goo.gl/maps/V1kA8Y4QW1L2",
        "PostedDate": "14 Sep, 2021",
        "image": "https://www.south.is/static/news/md/ishellir-vatnajokull-pall-jokull-petursson-105.jpg",
        "Description": "Exploring the stunning blue ice caves of Iceland felt like stepping into another world."
      },
    ]


  return (
    <div className="w-full h-fit p-12">

      <div className=" h-full ">
        <div className="grid grid-cols-3 gap-6 p-4">
          {posts.map((post) =>
          (
            <div key={post.id} className="w-full h-[60vh] flex flex-col justify-between" >
              <div className="h-3/4">
                <img src={post.image} alt={post.title} className="w-full h-3/4 object-cover" />
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.Description}</p>
              </div>

              <div>
                <button className="px-2  hover:tracking-wide duration-300  border-black border-b-2 cursor-pointer">Read More</button>
              </div>

            </div>
          ))}


        </div>
        <div className="w-full  py-4 flex justify-center ">
          <button className="bg-black text-white px-4 py-2 rounded-md">view more</button>
        </div>
      </div>

    </div>
  )
}

export default BlogSection