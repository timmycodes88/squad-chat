import tw from 'twin.macro'

function App() {
  return (
    <FullBackground>
      <Modal>
        <Title>Squad Chat</Title>
        <form>
          <Input type="email" placeholder='Email' />
          <Input type="password" placeholder='Password' />
        </form>
        <GoogleSignIn>Sign in with Google</GoogleSignIn>
      </Modal>
    </FullBackground>
  );
}

const FullBackground = tw.div`absolute w-screen h-screen bg-gray-100`
const Modal = tw.div`m-auto mt-10 bg-white border-2 border-blue-600 rounded-2xl w-[95%] sm:w-[500px] h-[65vh] shadow`
const Title = tw.h1`text-center text-5xl my-8 text-blue-600`
const Input = tw.input`block m-auto rounded-md border border-blue-600 mb-8 p-2`;
const GoogleSignIn = tw.button`block m-auto rounded-md p-4 bg-blue-600 text-white`;

export default App;
