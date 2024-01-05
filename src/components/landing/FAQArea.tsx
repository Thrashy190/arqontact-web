import { Switch, Trigger, Target, InteractiveTrigger } from "@components/common/Switch";
import If from "@components/common/If";
import FAQSection from "@components/landing/FAQSection";
import FAQItem from "@components/landing/FAQItem";
import Button from "@components/landing/Button";

export default function FAQArea() {
    return (
        <Switch target={0}>
            <div
                className="w-full sm:w-auto pb-2 flex-wrap overflow-x-auto flex gap-2 md:gap-4 md:flex-col"
            >
                <InteractiveTrigger
                    event="onClick"
                    id={0}
                    self={0}
                    field="active"
                >
                    <Button>Aplicación</Button>
                </InteractiveTrigger>
                <InteractiveTrigger
                    event="onClick"
                    id={1}
                    self={1}
                    field="active"
                >
                    <Button>Suscripciones</Button>
                </InteractiveTrigger>
                <InteractiveTrigger
                    event="onClick"
                    id={2}
                    self={2}
                    field="active"
                >
                    <Button>Servicios</Button>
                </InteractiveTrigger>
            </div>
            <FAQSection>
                <Target field="condition" self={0}>
                    <If>
                        <FAQItem
                            question="¿Cuando saldrá la aplicación al mercado?"
                            answer="Se planea que la aplicación salga la luz a más tardar en Enero 2024, listos para iniciar un nuevo año con todo."
                        />
                        <FAQItem question="Aplicación" answer="ola" />
                        <FAQItem question="Aplicación" answer="ola" />
                    </If>
                </Target>
                <Target field="condition" self={1}>
                    <If>
                        <FAQItem
                            question="¿Cuáles son las suscripciones que manejan?"
                            answer="Por el momento, solo mantendremos un producto, el poder posicionar mejor tus tableros en relación a otros en la plataforma."
                        />
                        <FAQItem
                            question="Suscripciones"
                            answer="ola"
                        />
                        <FAQItem
                            question="Suscripciones"
                            answer="ola"
                        />
                    </If>
                </Target>
                <Target field="condition" self={2}>
                    <If>
                        <FAQItem
                            question="¿Cuál es el precio de los servicios?"
                            answer="Nuestros servicios son gratuitos hasta cierto punto, solamente tendrás que pagar para acceder a algunas funcionalidades."
                        />
                        <FAQItem question="Servicios" answer="ola" />
                        <FAQItem question="Servicios" answer="ola" />
                    </If>
                </Target>
            </FAQSection>
        </Switch>
    )
}