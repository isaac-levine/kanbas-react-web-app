import ModuleList from "../Courses/Modules/ModuleList";

function Home() {
    return (
        <div className="row">

            <div className="col-8">
                <h2>Home</h2>
                <ModuleList />
            </div>

            <div className="col-4">
                <h2 >Status</h2>
            </div>

        </div>
    );
}
export default Home;