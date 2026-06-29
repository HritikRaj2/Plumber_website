"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { MdPhotoLibrary } from "react-icons/md";

// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY DATA — Replace the `src` URLs with your own images later.
//  Title and description can also be updated to match each photo.
// ─────────────────────────────────────────────────────────────────────────────
export const galleryItems = [
  {
    id: 1,
    src: "data:image/jpeg;base64,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",
    thumb: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk8BDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAKQA9gMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEcQAAEDAgQCBwUEBQkJAQAAAAEAAgMEEQUSITFBUQYTFCJhcZEyQlKBoTNTwdEHFXKCsSNEVGOSsuHw8RckNUNic6LC0hb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDdoQhUCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIUAhMVlbT0FM6oq5RHG3ieJ5DmVlK/Hqqua4QyPo6f3QB33+J5eSDXyTRRfaSxs/acAosuL4dCP5SthH7y84miie4l888h43cPyUR8FNa5a8+byg9Fl6VYNHvVB3k0lRJOm2DMGjpT5NWBdT04F+pNueY/mmjHT/ctPmg3jun2FjaGZ3yCZd+kHD+FNJ6hYcxU/Gnj/spJjg+4j9EG5/2h0P8ARpPUJQ/SFh53glCwRjg+5j9FwxwEfZR+iD0FvT7DDvHIPkn4+m+FPBPfFt15t1MJH2LPRMy5GPysaGgDWyD1A9OMJb7QlAPgE7H0zwV5AdNJHf4mrGMldhsbaeltHIGjrpmgZ3u3IvuANreCaOJV7ZrPrahzX8DITYoPTKTFsPrADTVcTyeF7FTV5QZc7i6WGGR3xZAx39ptj63VphWPVdIG9TK+WMaOgmNz+6f9EHoaFFw2vhxGkbUQaDYtO7TyUpUCEIQCEIQCEIQCEIQCEIQCEKsxTHsPwvSeQufvkZqQgs1AxfFabCKTr6k3J0jjbq6R3IKqb00wt+HT1bRIHRuDGxO9qRx2A9Fkaqqqa6sNfiDg6cizGD2YW8h+JUD1ZX1OIVQq8QcDI37KAexCPDmfFR3vc7UnRN3JJukSSWBKDk8vuj1UdpL3gJtzr6lLhcNddUDszrNDRsVGLTa9yuyyh23BN9Y61kASS2552SCUq5ylvNJsEHL6qTFHG5l7X5qOQOf0XWOLb22KB94a0XAAUOmb1uIsB2zi/knHvIYQTouYeC2V0p91pPzQWzj1mZx3JJTE7bxE8W6hJqans0GbLck6BQW4pLs+FhbyBIKC4iIkhDtjskvGR3WDQHR34FM4ZM2QFrDcb2O4Vi2AzBzA0uuLWaLoLnoxiZpqt0UhPVy+3+Dvz9ea24XmVFTTQBj6l7YS08Xd4jwA1WxwXHKeo/3Z7iwg2jLyO83hfxQXiEIVAhCEAhCEAhCNOJsgEJmSrgiBzPBtyUKTFB7tlBZHUWvbgvIsWpqttfURTPfZjnd+xOfXhuvQ3YkTrmSe1h4zOLQwe8UHmtBFlk6yVj7t7sTXNNhzJO11Pc15N8t77WK1s9ayRxa592cGBoaD57pptbDE3JGyNjeQAQZV0c50EZCQaOd24PoStW7EWf8AT6JiXF4ot3NvyA1QZZ9DOBfI4/ulN9jqTtE/0WnbiFTUfYRhjPienmhm89QXO8NAEGXbhdcW3bAbDe6iysfG4tfYEbjdaueCklFpJ5iOQfYKI6gwiMXIdb9tBmi/xC51luCu55MEi0bA+R3Jriob5I5SW02HRtHNxLj9UFeZb7D0XQ5x2YfRTOyTbvysHID/AEXRDC3V0lz4H8vzQQnML22cS2/kmnyGAEcLgOIPzU/IM2gu1M1dJPUNtEGEeOhQMzSSV8MeWFwDL6g3uovZJr6sf89FcYfh9TDFlklNtwxp0CmDDy7U3QVOFvdQTPmLI3uLbNDxmt8lPmxmslFusc1vwt7o+iTUU7IKhkRba9tSDrfgLDUqwjwi7bkW+SCldUzu2K4ypmjcCXHlcFXzsJGUtI3CqanDXU7XgvLhu3wCD0jojipxPCgJDeaA5HeI4FXq85/RzVmPGJqR3szQkj9pp/IlejIBCEKgQhCBmqqY6WEySE22AG5Kz1TjL5ZcmYAE8Ngnukk0OeFj8xfezAOJKy9cTRVskEsjc7CW3GxUE2rxUskLS7bhyUF+LeKq5mVFR/vGaGKF+z5pWsBtvYHUi/JRxBmzXxCkcG+11bZX5R4kMQXLcVu/vGw4lRqnGZJnHKbMbsFXNp4XuDY8UgkLhfLHDK428e7ok9npC24xeEknLk6l5df9m10Eo4i74kg1zviTHZqUOc1+KwMcwXIkiew+hGqDTU4Lb4nTtL9WmSKVgPzLUDhrJHGwdlHNdjnYw5t3czumhRhzS5mIULmDc5ntHqW2Q2hnecsEtJM7g2KpYXH5XuglOxJ597RNOxB52N1EMMzS5sjSwtNi1wsQm3EhBLfWSnQOTLnl5vI828EyCSdBcnkrRuAVv6ndikwZFTtOVoebOefAIIramOH7OFpPxOFyuOrqg90Ot4NFlxsLQ/La52vm/JajBui8L8OnxLFHuhgbpG1oF3nwv6IMqHOfq91yn2jRTK2npYI7tNnnYCyr3ydWNxqgn00GchT2wtYO8WjzKoafFeplHea9o3AUuarZDWNqmTPlY4ZhGLAAHgeKC2a+MaND32+FhP12SnVsUQvLki/beL+guszVYnUTvcTK5rTs0O2ChGXVBq5sfomWDYXzlpuDYNAPz1+iiS9Jqg/ZQxRjxu4rOGVcMhQX7ekdbfvNhcPFtk5Pi9PUUj3vYY5ANWE3v5LOB6dii7S/Jms0DM4+CC46H12TpVRO+N+T1BC9i8V4ZQsFFjNHPE67WzsvfhqvdDbMbIOIQhUCTJI2KJ8jz3WNLj8kpVXSmo7L0drJAbXZlv5oMaekUr5CaqFkwD87b7t1voUzXYrhdWZZJKSVk7yTma64v5KsNLVCIO7NIDbVo1LfMbqukfqQTYjcHgoJGJuaJ2MLAWsipw1xj2BY13t301J4JqeUS9skPevZrTkz8PjFgEnESC3D6kNAD6aNua3vMJYRfh7IUR8pcJATcvkvff6jRBNEzXVBLruDIbC9pQPnHt81Y9Ho6GWO2IOeA0Dq/YcGuPGw1HAa81QumOeQkkkttv8A/OiVDVTU743wyOYQ2x2sR8t/mgssZkgc98tJE6FsjLFt294gkZrHXXwUHrL1EeUnus902/v6JiWeSbM+VznPc7Un/N0jPmceNh5/xQOdYOoc24Jc6/Hn6Lkzw6S7rmzbDNb/ANUzm0Av8rn+Gyk4fD1+IQxnQF4JNrWA1N/kgtMaOasDB7TY2Ne7fXKE9SQ4KYGmrkrDJxbGwW9Sqmer7RVyzC/8o8keXD6JTJdbfigv4psAge1zaKvlsdnSMaD6KVX9Jo6/LHU4eHU0QtFCJS0N8dNysyZ2j2nBvmUntEfB9/IXVqRdHHIY7GHCKRuXbPdybxLpHiOJsYyeUMjZ7LIxlaFTvkBZs4X2u0i6ba9QiUZL3c4knmdVGdHLWOIjNmjc8Am5nnK1o3JU4nqIGQRjvHU+JRVZUUr4DcEObzCUycmIgqTVRVFJIWVLW6gFwBvYHa6gOHVvczkgUXFcuusYXlW1FhsYyyVTgxnibIK2GCWd2WONzyeACuKToxXTi8mSFvJxufQKxbjGEYc3JCc7rbRt3+ahVPS6cjLSU7I7+8/vFBHxPAZaCPrOua9vGwtZRaMHqHagF7rX8Ao1ZiFZWyXqqh7+QJsB8lIpopainEURs4Mc70QSpIYW4lTNhccjnxZrnmb/AIFe1rxl1MG089Wc2WNrLE8XAjZexU7s9PE/4mNP0QOIQhUCzH6Qe90ebFfSWojYfK606yv6QTlwWmedm1UZPqg87xuokd0nxOVrix3apAC020DiB/BSaaZ2KRS01WWvmbGXwyWs7TcX46KDi8chx2vIjkN6mQ+wdRmKl0MLaOnNbUi0j2lsEZ35FxHJQM0NXRtgdh+KxyGDOXxyxi7onHfTiDYKT+qcOlBNJj9Gbm4E+aMj10VY6FsozmzI2aF7ja/5pJjpPv8AXyQWn/5+d5PZq3D5gR7lZGD/AHl09GMW0McEb9PcmZ+BVOYaY7TN+qSYoPvW+p/JBcjotjRaT2PY/ED9VxvRbFiSZIIoxzklb+JVMYYvvGj/AD5LghjP/Mb6oLc9H5Wd2pxDDILfFVsP0BKRUSUGH0stPQVHaqqduSScNysYw7ht9STzUBlIwjSeP+0PzSOrMT7gB2U8tCg6xmQAv0PBqt46CkpKEVmJmQl3swtNvJV7XOc9kkjWWDgXZeIV7jNEcVpYq3Dpeta0axDQ+PzQVBxSKK/ZcNp4xzcMxSHY3Xkd2Rkf/bYAq85r5dRbQg8EkoLWgxSrmrWQVMxlimPVlrwDvoD62Ve1xGjtxoVymeWVUDx7sjT9U5iQ6rFKtg2bO8f+RQFOesq2E7N1UuWobG50rtSNGjxUOj0kLuQVj+r+1YZ1wf3zKQ0W0KAqpjUV8UTgDenbG7Tja4/iqqYFrm33FwfkVp6Cm6+pbPJYRwm97enoqKqjNTWSGBvtSOcATawJvrdBGEzmts3TxSXF0hFyXuOgG6uYKLBaRgfiWIGeT7mlFx83J49JKejBbg+FwU/9ZL3nFBDoujuJ1liynMbOcvd+m6nfqfB6D/ieJtkkG8cJufoqqsxXEq9rjUVMr4x7TW6MF+YGir+OiC1xCowZ0ZjoKGVrvvHv/BLwZxNXG0Oy9x1z4WVQN1PwqYxYhC5tt7a+KC0rTVPgkZO0Rxg/ycbdiPi+q9eoxajgbyjb/BeUtl7RRx0UjT18NSImP+NhdoPkvWmDI1reQsgUhCFQLM/pAhdN0XlLDYskY4k8BfdaVyYqoYqqmlp6hgfFK0te3mCoPJKKsroox1eJNJtt3b/UKLMXvkdLVSOnlOpsbpzHcKZhGLzUXaHFrCHMzD2mnb8vkiiq2UbHGIsu43vYFBU1Mss0oMjHNaPZbbZIDo+a0JxuQ7tafkuHF76OgjPmEFDnj45UZmc9FeHEYD7dHCf3U2avDzvh8N/JBT93wXLM5NVo6pwrjRNHldJ7Rg/9FHqgrMrL8E5G/qj3Xacrqw63B/6P9V3rMIP83Hqgjs6ub2CGPPAbFdhnq8Om66Alt9+LXDxCfLsMcCI4yw82lRJJpGCziHt4EILGXFcLrrOr6Fwl4yR8U0T0cPuVQ8iq01BvcRM87BJM7/hA+QQWQd0fa8OaKskG41VbXzCqr6ioDcvXSukA5XN7JJnmPvJq+qCRAbeaucLc91OSZCyGK7ieAJIF1QtOq0GCSMkwyqoXbygkWFxoEHKh9Y+tdFKx0NLFfI0CwJ5nmqyqhkllLI2FxzagLQ4bNFiuA5ZHgVlMMhJPtt4E/JU8Ljmkc07lAqiwF0ljV1UcDeTe87/BaGgwvo3SZTKx1U/iZTp6BUV3cz6roDztdBvIcaoaeEQwMijiGmRjQB6BV+JvwetoaiFtNTMllYQJGxNDgeBWWbDKdrpwUc7tBmQZp7XRvLHixabFEchY9rmnUG60p6PyVDryb81Jg6Iwm3WPf8jZAno5L2zGaeSTWOC8p5ZvzXplNUCS2qyeF4NT0DbQMIJ3JN7rR0bMtlRbDZCGeyuIB5Ud77cU9Iq6ply3QZvpxg7sRpGVtKzNUU4ILR77P8F5mXDkF69NWFt7DULLYxhtFWPdN2ZrJXHVzCW3+WyDE5zfwTmZxHdcLKwmwgMeQ17z5hMjD8uuptzSCx6OUcMkvaa9gkgbcNY4aOP5K+fFgZ3w+mHk2yy4ZNb7RwHmuhj/AInIL6WnwI/zGH90kfiostNgp9mjaP33fmq0Ncu2cgdkpML92nI8pHKO+ioj7Mbx++l2KLFAwaGn4Zx80k0TLd2R4+qk2KCEEI0H9Z9EzJSvY6waXDgQrIpJKCs7PL8Dk2dFakqFUw9/OzY7oGB5qzwSqZTVffHdNxfkqskjcWQx5Y4OG4UF8BFSxF0RIkeMos69hxXaeFxjGmp1TGH081Y8F0bxGDckjdaSCiOncsEFdFSEm2VToaA8RZWkNJbgpkdNsqK2KgaNwpkdK0e59FOZAnmxIIjILcAn2wjkFIbGnBGgZZHY7KfTtsmWsUqJtkEpuyEDZCDjxdQKiHMdlYlNuYDugo5aIO4KLJhjXcFozCOS4YByQZKTBWO4KO/AgeC2nZx4JJpgeSDDOwA8AmnYC/kt92VvgudkbyCDz44HJyXDgkvJeg9kZyCOxs5BB52cEm+Ern6ll+Er0XsbPhCOxs+EIPOf1NL8JSTgs3wlekdjZyHoudjZyHog83/Ukx90pQ6Pylei9iZyC6KJnIIPPW9GnnclOt6LRn2s5+a33ZGcgldlb4IMMzorSe9Dm8ySpkHR+li9mnjB/ZWuFMPBd7OPBBno8NaBYNAsn20VuAV31A5BHUjkgqm0tuATrae3BWPUhd6oIIIg8EoRKZ1YXerCCIIkoRqT1YRkFkDAYnmNslBqUAgUNlxdQgEIQgEWQhAWRZCEBZFkIQFlyyEIBFkIQdsEWC4hB2wXEIQFl2yEICyLIQgLIshCAsiyEICyEIQCEIQCEIQCEIQf/9k=",
    title: "Leak Repair – Under Kitchen Sink",
    description: "Complete pipe replacement and leak sealing in Vaishali, Ghaziabad.",
    category: "Leak Repair",
  },
  {
    id: 2,
    src: "https://placehold.co/800x600/f97316/ffffff?text=Gallery+Photo+2",
    thumb: "https://placehold.co/400x300/f97316/ffffff?text=Photo+2",
    title: "Geyser Installation",
    description: "New 25L electric geyser installed in Indirapuram.",
    category: "Geyser",
  },
  {
    id: 3,
    src: "https://placehold.co/800x600/0f1f40/ffffff?text=Gallery+Photo+3",
    thumb: "https://placehold.co/400x300/0f1f40/ffffff?text=Photo+3",
    title: "Full Bathroom Fitting",
    description: "New pipework, taps, and shower unit fitted in Raj Nagar.",
    category: "Bathroom",
  },
  {
    id: 4,
    src: "https://placehold.co/800x600/25D366/ffffff?text=Gallery+Photo+4",
    thumb: "https://placehold.co/400x300/25D366/ffffff?text=Photo+4",
    title: "Drain Cleaning Service",
    description: "High-pressure drain jetting in Crossings Republik.",
    category: "Drain",
  },
  {
    id: 5,
    src: "https://placehold.co/800x600/7c3aed/ffffff?text=Gallery+Photo+5",
    thumb: "https://placehold.co/400x300/7c3aed/ffffff?text=Photo+5",
    title: "Water Tank Cleaning",
    description: "Overhead tank disinfection and sludge removal, Moradabad.",
    category: "Tank",
  },
  {
    id: 6,
    src: "https://placehold.co/800x600/dc2626/ffffff?text=Gallery+Photo+6",
    thumb: "https://placehold.co/400x300/dc2626/ffffff?text=Photo+6",
    title: "Emergency Pipe Burst Fix",
    description: "Midnight emergency call — burst pipe fixed within 90 minutes.",
    category: "Emergency",
  },
  {
    id: 7,
    src: "https://placehold.co/800x600/059669/ffffff?text=Gallery+Photo+7",
    thumb: "https://placehold.co/400x300/059669/ffffff?text=Photo+7",
    title: "RO Filter Installation",
    description: "Under-sink RO system installed and tested, Vaishali.",
    category: "RO",
  },
  {
    id: 8,
    src: "https://placehold.co/800x600/ca8a04/ffffff?text=Gallery+Photo+8",
    thumb: "https://placehold.co/400x300/ca8a04/ffffff?text=Photo+8",
    title: "Motor Pump Repair",
    description: "Submersible pump wiring and motor serviced in Kaushambi.",
    category: "Pump",
  },
  {
    id: 9,
    src: "https://placehold.co/800x600/0891b2/ffffff?text=Gallery+Photo+9",
    thumb: "https://placehold.co/400x300/0891b2/ffffff?text=Photo+9",
    title: "Toilet Cistern Repair",
    description: "Running cistern fixed with new fill valve, Moradabad City.",
    category: "Toilet",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeIndex !== null) setActiveIndex(null);
        else onClose();
      }
      if (activeIndex !== null) {
        if (e.key === "ArrowRight")
          setActiveIndex((i) => (i! + 1) % galleryItems.length);
        if (e.key === "ArrowLeft")
          setActiveIndex((i) =>
            i! === 0 ? galleryItems.length - 1 : i! - 1
          );
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, activeIndex, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i! === 0 ? galleryItems.length - 1 : i! - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i! + 1) % galleryItems.length);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#0a0f1e]/95 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              activeIndex !== null ? setActiveIndex(null) : onClose();
            }
          }}
        >
          {/* ── HEADER BAR ── */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-2 text-white">
              <MdPhotoLibrary className="text-[#f97316]" size={22} />
              <span className="font-bold text-base">Our Work Gallery</span>
              <span className="text-white/40 text-xs ml-1">
                ({galleryItems.length} photos)
              </span>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close gallery"
            >
              <FiX size={22} />
            </motion.button>
          </div>

          {/* ── THUMBNAIL GRID ── */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {galleryItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveIndex(idx)}
                  className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                    <p className="text-white text-[10px] font-semibold leading-tight line-clamp-2">
                      {item.title}
                    </p>
                    <span className="mt-0.5 inline-block bg-[#f97316] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full w-fit">
                      {item.category}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* ── LIGHTBOX (when a photo is selected) ── */}
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setActiveIndex(null);
                }}
              >
                {/* Close lightbox */}
                <motion.button
                  onClick={() => setActiveIndex(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                  aria-label="Close lightbox"
                >
                  <FiX size={24} />
                </motion.button>

                {/* Prev / Next */}
                <motion.button
                  onClick={goPrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-3 sm:left-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full z-10 transition-colors"
                  aria-label="Previous photo"
                >
                  <FiChevronLeft size={22} />
                </motion.button>
                <motion.button
                  onClick={goNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-3 sm:right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full z-10 transition-colors"
                  aria-label="Next photo"
                >
                  <FiChevronRight size={22} />
                </motion.button>

                {/* Main image */}
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-3xl"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={galleryItems[activeIndex].src}
                      alt={galleryItems[activeIndex].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Caption */}
                  <div className="mt-4 text-center px-2">
                    <h3 className="text-white font-bold text-base sm:text-lg">
                      {galleryItems[activeIndex].title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {galleryItems[activeIndex].description}
                    </p>
                    <p className="mt-2 text-white/30 text-xs">
                      {activeIndex + 1} / {galleryItems.length}
                      {" · "}use ← → keys to navigate
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
