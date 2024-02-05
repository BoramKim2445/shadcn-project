interface DropDownIconsProps {
  popper?: boolean;
  iconType?: string; //아이콘 svg 파일명
}

export default function DashboardIcons({
  popper,
  iconType,
}: DropDownIconsProps) {
  const iconClasses = popper
    ? 'stroke-select group-hover:stroke-black disabled:stroke-disabled'
    : 'stroke-black disabled:stroke-disabled';

  const getIconComponent = (iconType: string) => {
    try {
      const IconComponent = require(`../../../assets/icon/view/dashboard${
        popper ? '/popper' : ''
      }/${iconType}.svg`).default;
      return (
        <IconComponent width={'1rem'} height={'1rem'} className={iconClasses} />
      );
    } catch (error) {
      console.error(`Icon not found: ${iconType}`);
      return null;
    }
  };

  return <>{iconType && getIconComponent(iconType)}</>;
}
