import 'dayjs/locale/pt-br';
// PLUGINS
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';

import dayjs from 'dayjs';

dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(duration);

dayjs.extend(updateLocale);

dayjs.locale('pt-br');
dayjs.updateLocale('pt-br', {
  calendar: {
    lastDay: '[Ontem]',
    sameDay: 'HH:mm',
    nextDay: '[Amanhã]',
    lastWeek: 'DD/MM/YYYY',
    nextWeek: 'DD/MM/YYYY',
    sameElse: 'DD/MM/YYYY',
  },
});

export default dayjs;
