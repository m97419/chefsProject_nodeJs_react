export default function ChefDesign({chef}){


    return(<div>
        {/* <Avatar image={`http://localhost:7788/uploads/${chef?.picture}`} size="xlarge" shape="circle" /> */}

           <img alt="Card"  className="picturesizebig" src={`http://localhost:7788/uploads/${chef?.picture}` }/>
    </div>
    )
}