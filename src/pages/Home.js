import React from 'react'

import FifthSection from "../components/fifthSection";
import Footer from "../components/footer";
import ForthSection from "../components/forthSection";
import Header from "../components/header";
import SecondSection from "../components/secondSection";
import ThirdSection from "../components/thirdSection";

export default function Home() {
    return (
        <div className="scroll-smooth overflow-hidden text-firstBlack bg-white dark:bg-darkModeBlack">
            <Header />
            <SecondSection />
            <ThirdSection />
            <ForthSection />
            <FifthSection />
            <Footer />
        </div>
    )
}
