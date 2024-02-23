import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테스트밸리 - 전자제품 사는게 즐겁다",
  description: "새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}





// ApiClient can be initialized and used in the following way:

// // API client context
// const ApiClientContext = createContext(null);

// export const ApiClientProvider = ({ children }: { children: React.ReactNode }) => {
//   const [apiClient, setApiClient] = useState(null);

//   useEffect(() => {
//     const initializeClient = async () => {
//       try {
//         const client = await ApiClient.initialize('http://192.168.4.115:8181/api/v1');
//         setApiClient(client);
//       } catch (error) {
//         // Handle error gracefully
//         console.error('Error initializing ApiClient:', error);
//       }
//     };

//     initializeClient();
//   }, []);

//   return (
//     <ApiClientContext.Provider value={apiClient}>{children}</ApiClientContext.Provider>
//   );
// };

