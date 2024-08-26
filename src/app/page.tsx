import { redirect } from 'next/navigation';

const Homepage = () => {
  redirect('/admin');
  return null; // This line is not reached because of the redirect
}

export default Homepage;
