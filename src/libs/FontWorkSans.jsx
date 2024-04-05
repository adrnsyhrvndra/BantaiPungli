import localFont from "@next/font/local";

const workSans = localFont({
      src: [
        {
          path: "../../public/fonts/WorkSans-Thin.ttf",
          weight: "100",
        },
        {
          path: "../../public/fonts/WorkSans-Regular.ttf",
          weight: "400",
        },
        {
          path: "../../public/fonts/WorkSans-Medium.ttf",
          weight: "500",
        },
        {
          path: "../../public/fonts/WorkSans-SemiBold.ttf",
          weight: "600",
        },
        {
          path: "../../public/fonts/WorkSans-Bold.ttf",
          weight: "700",
        },
        {
          path: "../../public/fonts/WorkSans-ExtraBold.ttf",
          weight: "800",
        },
        {
          path: "../../public/fonts/WorkSans-Black.ttf",
          weight: "900",
        },
      ],
      variable: "--font-work-sans",
});

export default workSans;