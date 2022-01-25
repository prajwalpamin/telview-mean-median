//find mean median 

const arrayProp=(arr)=>{
  const arr1=arr.sort(function(a,b){return(a-b)})
  console.log(arr1);
  const mean=0;
  const sum=0;
  const median=0;
  for(let i=0;i<arr1.length;i++){
      sum+=arr1[i];
  }
  if(arr1.length%2==0){
      median=(arr1[arr1.length/2]+arr1[(arr1.length/2)-1])/2;
  }else{
      median=arr1[parseInt(arr1.length/2)]
  }
  mean=sum/arr1.length;

  //result
  console.log("mean is:"+mean+" median is:"+median)
}

const arr=[2,1,7,4,6];
arrayProp(arr);