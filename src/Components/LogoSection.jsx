export const LogoSection = () => {
 
  return <div className="logosection">
    <div className="img-box">
      {
    Array.from({ length: 7 }).map((cuur,indx)=>
     <div key={indx} className="logo-box flex">
     <img src={`images/logo${indx+1}.png`} width={100}  alt="" />
     </div>
    )
      }
    </div>
  </div>;
};
