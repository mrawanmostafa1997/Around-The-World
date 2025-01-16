import IssueCard from "./IssueCard";

const IssueList = (data) => {
  return (
    <div className="md mt-8 grid justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data.map((issue) => (
        <IssueCard key={issue.id} />
      ))}
    </div>
  );
};
export default IssueList;
