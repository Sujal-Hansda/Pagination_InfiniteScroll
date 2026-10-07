import { useInfiniteQuery } from "@tanstack/react-query"
import { getAllProducts } from "./api/ProductApi"
import ProductCard from "./component/ProductCard";


const Infinite = () => {

  let limit = 40;

  let  {data,isPending,getNextPageParam,hasNextPage,isFetchingNextPage,fetchNextPage} = useInfiniteQuery({
    queryKey:["products"],
    queryFn:({pageParam})=>getAllProducts(limit,pageParam),
    initialPageParam:0,
    getNextPageParam:(lastPage,allPage)=>{
      console.log(allPage);
      let loadedData = allPage.length*limit;
      if  (loadedData<lastPage.total) return loadedData;
      return undefined;
    }
  })

  if (isPending) return "Loading...."
  console.log(data);
  
  let allProducts = data?.pages?.flatMap((val)=>val.products) ?? [];

  return (
    <div className='flex p-5 flex-col gap-6 items-center'>
  <div 
  className="w-full grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
    {
      allProducts.map((val)=>
      {
        return <ProductCard key={val.id} product={val}/>
      })
    }
    </div>
    {
      hasNextPage && (    <button className="cursor-pointer" onClick={()=>fetchNextPage()}>{isFetchingNextPage?"Loading":"Load More"}</button>
)
    }
    </div>
  )
}

export default Infinite