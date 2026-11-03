import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBullseye,
  faBuilding,
  faCarBattery,
  faFan,
  faFileContract,
  faHandHoldingDollar,
  faHouseChimneyWindow,
  faMagnifyingGlassChart,
  faScaleBalanced,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import type { IconName } from "@/lib/site";

export { FontAwesomeIcon as Icon };

const serviceIcons: Record<IconName, IconDefinition> = {
  scan: faMagnifyingGlassChart,
  scale: faScaleBalanced,
  building: faBuilding,
  shield: faShieldHalved,
  contract: faFileContract,
  target: faBullseye,
  subsidy: faHandHoldingDollar,
  battery: faCarBattery,
  heatpump: faFan,
  insulation: faHouseChimneyWindow,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return <FontAwesomeIcon icon={serviceIcons[name]} className={className} />;
}
