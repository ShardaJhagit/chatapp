function Log(){
    return(
        <div className="h-96 w-1/3 p-5 text-center shadow-2xl shadow-slate-600 mx-auto ">
            <h3 className="text-xl text-blue-500 "><b>Login</b></h3>
                <form className="mt-5">
                <input type="text" placeholder="User Name" className="border-zinc-950 border-2 rounded-xl w-96 mb-4 p-1"></input><br></br>
                <input type="password" placeholder=" password" className="border-zinc-950 border-2 rounded-xl w-96 p-1"></input><br></br>
                <button type="submit" className="mt-2 border-zinc-350 border-2 rounded-xl w-56 p-2 bg-blue-900  text-white">Save and Next</button><br></br>
                <p className="text-blue-500  mt-4">Forget password?</p>
                <input type="checkbox"></input>
                <label>I agree terms and condition</label>
            
                </form>
        </div>
    )
}
export default Log