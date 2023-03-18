import React from 'react';
import AnnounceList from "~/components/AnnounceList";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import 'react-calendar/dist/Calendar.css';
const Announce = () => {
  return (
    <div>
      <Header />
      <AnnounceList />
      <Footer />
    </div>
  );
};

export default Announce;