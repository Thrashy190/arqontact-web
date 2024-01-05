import { Switch, Target, InteractiveTrigger } from "@components/common/Switch";
import AnimatedIf from "@components/common/AnimatedIf";

import LandingIconText from "@components/landing/LandingIconText";

export default function InfoArea() {
    return (
		<Switch target="table">
            <h1
                className="w-full mb-16 text-center text-3xl lg:text-5xl font-semibold"
            >
                Con Arqontact
            </h1>
            <div
                className="flex flex-wrap md:space-y-16 justify-center md:justify-between xl:items-center items-start"
            >
                <div className="flex flex-col md:space-y-16">
                    <InteractiveTrigger
                        event="onClick"
                        id="table"
                        self="table"
                        field="active"
                    >
                        <LandingIconText
                            icon={{ classes: "w-6 h-6 flex-shrink-0", icon: "fa-solid:table" }}
                            description="Podrás organizar a la gente trabajando en tu proyecto."
                        />
                    </InteractiveTrigger>
                    <InteractiveTrigger
                        event="onClick"
                        id="usercheck"
                        self="usercheck"
                        field="active"
                    >
                        <LandingIconText
                            icon={{ classes: "w-6 h-6 flex-shrink-0", icon: "fa-solid:user-check" }}
                            description="Verás las reseñas del trabajador de otros arquitectos."
                        />
                    </InteractiveTrigger>
                </div>
                <div
                    className="w-[250px] h-[490px] hidden md:flex xl:relative xl:top-0 sticky top-1/4"
                >
                    <Target field="condition" self="table">
                        <AnimatedIf>
                            <img
                                src="/organizer.jpg"
                                width="250"
                                height="490"
                                alt="organizer"
                                className={`absolute`}
                            />
                        </AnimatedIf>
                    </Target>
                    <Target field="condition" self="usercheck">
                        <AnimatedIf>
                            <img
                                src="/reviews.jpg"
                                width="250"
                                height="490"
                                alt="reviews"
                                className={`absolute`}
                            />
                        </AnimatedIf>
                    </Target>
                    <Target field="condition" self="img">
                        <AnimatedIf>
                            <img
                                src="/galleries.jpg"
                                width="250"
                                height="490"
                                alt="galleries"
                                className={`absolute`}
                            />
                        </AnimatedIf>
                    </Target>
                    <Target field="condition" self="wifi">
                        <AnimatedIf>
                            <img
                                src="/map.jpg"
                                width="250"
                                height="490"
                                alt="map"
                                className={`absolute`}
                            />
                        </AnimatedIf>
                    </Target>
                </div>
                <div className="flex flex-col md:space-y-16">
                    <InteractiveTrigger
                        event="onClick"
                        id="img"
                        self="img"
                        field="active"
                    >
                        <LandingIconText
                            icon={{ classes: "w-6 h-6 flex-shrink-0", icon: "fa-solid:image" }}
                            description="Verás como es el trabajo de los obreros."
                        />
                    </InteractiveTrigger>
                    <InteractiveTrigger
                        event="onClick"
                        id="wifi"
                        self="wifi"
                        field="active"
                    >
                        <LandingIconText
                            icon={{ classes: "w-6 h-6 flex-shrink-0", icon: "fa-solid:wifi" }}
                            description="No necesitarás moverte de donde estés."
                        />
                    </InteractiveTrigger>
                </div>
            </div>
        </Switch>
    )
}