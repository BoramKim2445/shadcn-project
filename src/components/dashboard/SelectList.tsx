import DashboardDropdown from './DashboardDropdown';
import DashboardIcons from '../ui/icons/DashboardIcons';

export default function SelectList() {
  return (
    <div className='p-2 flex justify-end gap-3'>
      <DashboardDropdown
        label='추가하기'
        list={AddList}
        icon={<DashboardIcons iconType='add' />}
      />
      <DashboardDropdown
        label='삭제하기'
        list={RemoveList}
        icon={<DashboardIcons iconType='delete' />}
      />
      <DashboardDropdown
        label='공유하기'
        list={ExportList}
        icon={<DashboardIcons iconType='share' />}
        disabled
      />
      <DashboardDropdown
        label='내려받기'
        list={ExportList}
        icon={<DashboardIcons iconType='export' />}
      />
      <DashboardDropdown
        label='수정하기'
        list={ChangeList}
        icon={<DashboardIcons iconType='edit' />}
      />
    </div>
  );
}

const AddList = [
  {
    value: '차트 추가하기',
    icon: <DashboardIcons popper={true} iconType='add-chart' />,
  },
  {
    value: '대시보드 페이지 추가하기',
    icon: <DashboardIcons popper={true} iconType='add-page' />,
  },
];

const RemoveList = [
  {
    value: '선택한 차트 삭제하기',
    icon: <DashboardIcons popper={true} iconType='delete-chart' />,
  },
  {
    value: '대시보드 페이지 삭제하기',
    icon: <DashboardIcons popper={true} iconType='delete-page' />,
  },
  {
    value: '대시보드 삭제하기',
    icon: <DashboardIcons popper={true} iconType='delete-dashboard' />,
    disabled: true,
  },
];

const ExportList = [
  {
    value: '대시보드 JPEG로 내려받기',
    icon: <DashboardIcons popper={true} iconType='down-jpeg' />,
  },
  {
    value: '대시보드 PDF로 내려받기',
    icon: <DashboardIcons popper={true} iconType='down-pdf' />,
  },
];

const ChangeList = [
  {
    value: '2단 그리드로 변경하기',
    icon: <DashboardIcons popper={true} iconType='grid2' />,
  },
  {
    value: '4단 그리드로 변경하기',
    icon: <DashboardIcons popper={true} iconType='grid4' />,
  },
  {
    value: '대시보드 이름 변경하기',
    icon: <DashboardIcons popper={true} iconType='rename-dashboard' />,
  },
  {
    value: '차트 이동하기',
    icon: <DashboardIcons popper={true} iconType='grid4' />,
    disabled: true,
  },
  {
    value: '페이지 타이틀 수정하기',
    icon: <DashboardIcons popper={true} iconType='change-title' />,
  },
  {
    value: '차트 기준일 변경하기',
    icon: <DashboardIcons popper={true} iconType='move-chart' />,
  },
];
