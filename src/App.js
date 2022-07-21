

function CurrentDate() {
   return <h2>{new Date().toLocaleDateString()}</h2>;
}

function CurrentTime() {
   return <h2>{new Date().toLocaleTimeString()}</h2>;
}

function App() {
   return (
      <div className="App">
         <CurrentDate />
         <CurrentTime />
      </div>
   );
}

export default App;
