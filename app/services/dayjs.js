import 'dayjs/locale/pt-br';
// PLUGINS
import relativeTime from 'dayjs/plugin/relativeTime';

import dayjs from 'dayjs';

dayjs.extend(relativeTime);

dayjs.locale('pt-br');

export default dayjs;
