export default function PremiumBar() {
  return (
    <>
      <div className="w-full p-3 border-[1px] border-bordercolor rounded-[15px] mt-4">
        <h1 className="text-white text-[21px] font-bold">
          Subscribe to Premium
        </h1>
        <p className="text-[#ffffffd7] text-[15px] leading-5 mt-2">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className="text-white text-[15px] font-bold bg-[#f91880] px-4 py-1.5 rounded-full mt-3 hover:bg-[#f91881e9] transition-all duration-400">
          Subscribe
        </button>
      </div>
    </>
  );
}
