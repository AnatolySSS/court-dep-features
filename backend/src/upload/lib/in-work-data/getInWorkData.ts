import { DateRange } from './aggregateTypeInWork';
import { getApproveResponsibles } from './getApproveResponsibles';
import { getObjectionsResponsibles } from './getObjectionsResponsibles';
import { getTypeResponsibles } from './getTypeResponsibles';

export const getInWorkData = (data: any[]) => {
  return {
    firstInstance: {
      typeResponsibles: getTypeResponsibles(data, 'Первая инстанция'),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Первая инстанция',
      ),
      approveResponsibles: getApproveResponsibles(data, 'Первая инстанция'),
    },
    appealInstance: {
      typeResponsibles: getTypeResponsibles(data, 'Апелляционная инстанция'),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Апелляционная инстанция',
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Апелляционная инстанция',
      ),
    },
    cassInstance: {
      typeResponsibles: getTypeResponsibles(data, 'Кассационная инстанция'),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Кассационная инстанция',
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Кассационная инстанция',
      ),
    },
    cass2Instance: {
      typeResponsibles: getTypeResponsibles(data, 'Кассационная инстанция 2'),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Кассационная инстанция 2',
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Кассационная инстанция 2',
      ),
    },
  };
};
