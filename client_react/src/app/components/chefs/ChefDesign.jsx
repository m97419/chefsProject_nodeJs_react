export default function ChefDesign({chef}){


    return(<div>


           <img alt="Card"   className="picturesizebig" src={`http://localhost:7788/uploads/${chef?.picture}` }/>
    </div>
    )
}