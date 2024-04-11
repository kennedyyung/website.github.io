import Link from "next/link";

const BudgetBuddies = () => {
    return (
    <div className="container min-h-screen bg-base dark:bg-dark_base flex flex-col items-center mt-10">
    <h1 className="font-bold text-2xl text-black dark:text-dark_text mt-10">Arc&apos;Quest</h1>
    
    
    <div className="card w-3/4 bg-txt text-white mt-5">
     <div className="card-body items-center text-center">
    <p> Arc&apos;Quest is the winner of YouCode x Arc&apos;teryx 2024</p>
    <p> It is an omnichannel mobile application that enhances Arc&apos;teryx's existing app functionality by integrating incentives and features designed to foster outdoor activities, wellness, and community engagement.</p>

      <div className="flex flex-row">
        <Link href="https://github.com/ktran003/cmdf"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
          Github
        </Link>
        <Link href="https://devpost.com/software/budget-buddies-18osn5?ref_content=user-portfolio&ref_feature=in_progress" rel="noopener noreferrer" target="_blank" className="font-bold underline">
          Devpost
        </Link>
      </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    </div>
    );
};

export default BudgetBuddies;