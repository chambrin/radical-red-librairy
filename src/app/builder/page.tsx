import TypeChart from "@/components/page/teambuilder/Typechart";
import TeamWeakness from "@/components/page/teambuilder/TeamWeakness";

export default function Teambuilder() {
    return (
        <div>
            <div className="px-4 sm:px-6 md:px-8 lg:px-48 xl:px-72 2xl:px-96">
                <TeamWeakness/>
            </div>
            <div >
                <TypeChart/>
            </div>
        </div>
    )
}