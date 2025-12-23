import { getObjectionsResponsibles } from './getObjectionsResponsibles';
import { getTypeResponsibles } from './getTypeResponsibles';

export const modifyData = (data: any[]) => {
  return {
    firstInstance: {
      typeResponsibles: getTypeResponsibles(data, 'Первая инстанция'),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Первая инстанция',
      ),
    },
    appealInstance: {
      typeResponsibles: getTypeResponsibles(data, 'Апелляционная инстанция'),
      objectionResponsibles: getObjectionsResponsibles(
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
    },
    cass2Instance: {
      typeResponsibles: getTypeResponsibles(data, 'Кассационная инстанция 2'),
      objectionResponsibles: getObjectionsResponsibles(
        data,
        'Кассационная инстанция 2',
      ),
    },
  };
};
