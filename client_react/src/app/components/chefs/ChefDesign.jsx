export default function ChefDesign({chef}){


    return(<div className="cc">


           <img alt="Card"   className="picturesizebig" src={`http://localhost:7788/uploads/${chef?.picture}` }/>
    </div>
    )
}