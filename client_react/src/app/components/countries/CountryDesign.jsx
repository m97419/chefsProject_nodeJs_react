export default function CountryDesign({country}){


    return(<div>
           <img alt="Card"  className="picturesizebig" src={`http://localhost:7788/uploads/${country?.pictures[0]}` }/>
    </div>
    )
}