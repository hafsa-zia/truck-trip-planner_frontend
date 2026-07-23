import { useState } from "react"
import api from "../../services/api"

export default function TripForm({setTrip}){

    const [form,setForm] = useState({
        current_location:"",
        pickup_location:"",
        dropoff_location:"",
        current_cycle_used:""
    })

    const handleSubmit = async(e)=>{

        e.preventDefault()

        const response = await api.post(
            "/trips/",
            form
        )

        setTrip(
            response.data
        )
    }

    return(

        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-lg"
        >

            <input
                placeholder="Current Location"
                className="border p-2 w-full mb-3"
                onChange={(e)=>
                    setForm({
                        ...form,
                        current_location:e.target.value
                    })
                }
            />

            <input
                placeholder="Pickup Location"
                className="border p-2 w-full mb-3"
                onChange={(e)=>
                    setForm({
                        ...form,
                        pickup_location:e.target.value
                    })
                }
            />

            <input
                placeholder="Dropoff Location"
                className="border p-2 w-full mb-3"
                onChange={(e)=>
                    setForm({
                        ...form,
                        dropoff_location:e.target.value
                    })
                }
            />

            <input
                type="number"
                placeholder="Current Cycle Used"
                className="border p-2 w-full mb-3"
                onChange={(e)=>
                    setForm({
                        ...form,
                        current_cycle_used:e.target.value
                    })
                }
            />

            <button
                className="
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-lg
                "
            >
                Plan Trip
            </button>

        </form>
    )
}