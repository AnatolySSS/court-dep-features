import { DateRange } from './aggregateResponsibles';
import { getApproveResponsibles } from './getApproveResponsibles';
import { getObjectionsResponsibles } from './getObjectionsResponsibles';
import { getTypeResponsibles } from './getTypeResponsibles';

export const modifyData = (data: any[], dateRange?: DateRange) => {
  return {
    firstInstance: {
      typeResponsibles: getTypeResponsibles(
        data,
        'Первая инстанция',
        dateRange,
      ),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Первая инстанция',
        dateRange,
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Первая инстанция',
        dateRange,
      ),
    },
    appealInstance: {
      typeResponsibles: getTypeResponsibles(
        data,
        'Апелляционная инстанция',
        dateRange,
      ),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Апелляционная инстанция',
        dateRange,
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Апелляционная инстанция',
        dateRange,
      ),
    },
    cassInstance: {
      typeResponsibles: getTypeResponsibles(
        data,
        'Кассационная инстанция',
        dateRange,
      ),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Кассационная инстанция',
        dateRange,
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Кассационная инстанция',
        dateRange,
      ),
    },
    cass2Instance: {
      typeResponsibles: getTypeResponsibles(
        data,
        'Кассационная инстанция 2',
        dateRange,
      ),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Кассационная инстанция 2',
        dateRange,
      ),
      approveResponsibles: getApproveResponsibles(
        data,
        'Кассационная инстанция 2',
        dateRange,
      ),
    },
  };
};
