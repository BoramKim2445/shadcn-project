import SelectBox from '@/components/dashboard/SelectBox';
import AddIcon from '../../../src/assets/icon/view/dashboard/add.svg';
import DeleteIcon from '../../../src/assets/icon/view/dashboard/delete.svg';
import ShareIcon from '../../../src/assets/icon/view/dashboard/share.svg';
import ExportIcon from '../../../src/assets/icon/view/dashboard/export.svg';
import EditIcon from '../../../src/assets/icon/view/dashboard/edit.svg';

export default function SelectList() {
  return (
    <div className='p-2 flex justify-end gap-3'>
      <SelectBox
        icon={<AddIcon className='w-5 h-4' />}
        label='추가하기'
        list={SampleList}
      />
      <SelectBox
        icon={<DeleteIcon className='w-5 h-4' />}
        label='삭제하기'
        list={SampleList}
      />
      <SelectBox
        icon={<ShareIcon className='w-5 h-4' />}
        label='공유하기'
        list={SampleList}
      />
      <SelectBox
        icon={<ExportIcon className='w-5 h-4' />}
        label='내려받기'
        list={SampleList}
      />
      <SelectBox
        icon={<EditIcon className='w-5 h-4' />}
        label='수정하기'
        list={SampleList}
      />
    </div>
  );
}

const SampleList = [
  { id: 1, value: 'light' },
  { id: 2, value: 'dark' },
  { id: 3, value: 'list' },
];
