import { Switch, InteractiveTrigger } from "@components/common/Switch";
import OptionWithInfo from "@components/common/OptionWithInfo";

export default function UserTypeSelection() {
    return (
		<Switch target="table">
            <InteractiveTrigger
                event="onClick"
                id="constructor"
                self="constructor"
                field="active"
            >
                <OptionWithInfo name="constructor" title="Constructor" description="Busco trabajo en obras. Poseo conocimientos prácticos para realizar labores manuales de construcción."/>
            </InteractiveTrigger>
            <InteractiveTrigger
                event="onClick"
                id="professional"
                self="professional"
                field="active"
            >
                <OptionWithInfo name="professional" title="Profesional" description="Busco trabajadores para hacer labores en una construcción. Dirijo una obra."/>
            </InteractiveTrigger>
        </Switch>
    )
}