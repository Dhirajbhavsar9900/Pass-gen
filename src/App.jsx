import { useState } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  const clearPassword = () => {
    setGeneratedPassword("");
  };

  return (
    <>
    <section className="flex justify-center items-center m-6">
      <div className=" flex justify-center flex-col">
        <div className=" mt-10">
          <h1 className=" font-mono text-4xl">Password Generator</h1>
        </div>

        <div className="mt-10 " >
          <form action="">
            <div className="flex flex-col">
              <span>Enter Length of the password</span>
              <input 
                type="number" 
                className="bg-red-500 p-2 outline-none rounded-lg text-center font-semibold"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              />
            </div>

            <div className="flex justify-center flex-col">
              <button 
                className="bg-blue-500 p-2 outline-none rounded-lg text-center font-semibold m-3"
                type="button"
                onClick={handleGeneratePassword}
              >
                Generate Password
              </button>
              <div className="flex justify-center"> 
                <span>{generatedPassword}</span>
              </div>

              <div className="flex justify-center">
                <button 
                  className="bg-green-500 p-2 outline-none rounded-lg text-center font-semibold m-3"
                  type="button"
                  onClick={copyToClipboard}
                  disabled={!generatedPassword}
                >
                  Copy Password
                </button>
                <button 
                  className="bg-yellow-500 p-2 outline-none rounded-lg text-center font-semibold m-3"
                  type="button"
                  onClick={clearPassword}
                  disabled={!generatedPassword}
                >
                  Clear Password
                </button>  
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default App;
