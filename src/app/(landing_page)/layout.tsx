import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import BannerSlider from "@/components/banner/BannerSlider";


export default function WebLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="p-4 sm:p-0 lg:p-0 sm:shadow-md lg:shadow-none">
            <Header />
            <BannerSlider />
            {children}
        </div>
    );
}
