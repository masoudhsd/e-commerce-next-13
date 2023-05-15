import SelectComponent from "components/components/SelectComponent";
import RootLayout from "./layout";

export default async function Home() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: { revalidate: 5 },
    }
  );
  const data = await res.json();

  return (
    <RootLayout>
      <main>
        <section className="landing">
          <div>
            <div>
              <h1></h1>
              <p></p>
              <div>
                <button></button>
              </div>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <div>
                  <h2></h2>
                  <small></small>
                </div>
              </div>
            </div>
          </div>
          <div>{/* <SelectComponent /> */}</div>
          <div>
            <label htmlFor="locations">Location:</label>
            <select name="locations" id="locations">
              <option value="volvo">Iran</option>
              <option value="saab">Netherlands</option>
              <option value="mercedes">Turkey</option>
              <option value="audi">USA</option>
            </select>
          </div>
          <div>
            <label htmlFor="locations">Location:</label>
            <select name="locations" id="locations">
              <option value="volvo">Iran</option>
              <option value="saab">Netherlands</option>
              <option value="mercedes">Turkey</option>
              <option value="audi">USA</option>
            </select>
          </div>
          <button>ذعففخد</button>
        </section>
      </main>
    </RootLayout>
  );
}
