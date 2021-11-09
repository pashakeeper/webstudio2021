<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'denis7ae_keeper' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'denis7ae_keeper' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'ZAQxsw12' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=f[ 1Mrsq?)x%0f[htYBc_:}wt^b_,1kp+v~ {!0c5:;U3im!ak&{Yy]9{F@<??h' );
define( 'SECURE_AUTH_KEY',  '!H>x5lJN;i5&*iD|6)cT[G1F1r,^yZ[Ie+M&p9ELYbA#UqN+1Ayqtrv.h+@{;.)e' );
define( 'LOGGED_IN_KEY',    '6 5(rSF(`QeQ3opDwKOI:MM=y)|zo7=A>.YW7!<(*L_n2%1{?K:$2qwBXhb;4$U+' );
define( 'NONCE_KEY',        '*]#pWE2$j24lw43{*?zgw^olMgb=G`.7{[+N]kx=y3{}L{9{ dE=Ebk}E_xg5Gi!' );
define( 'AUTH_SALT',        'N<Iv;2eG-K-@skAj+#DlK2g(8&;~jW*Djw<HlIT~z$12819:(5cA@ue[<y^Z&T#j' );
define( 'SECURE_AUTH_SALT', 'VoVHsCM|+nOj6f!samtyW6k~~sris#fbB*[4JWu%I9oU[D&bb,0Y/Y7#+Dp0$;O{' );
define( 'LOGGED_IN_SALT',   'Rt*czlG9RDC?OutzTKry% 5v;?1,v^SA&KwZ&w],M{.Qm?&N)sHf@_?FePRr)OJw' );
define( 'NONCE_SALT',       'Gz?:VYN8v{,`/aXo:vi{e>xv!G,y|4=PuFyjy{HspUn,pr3}}Qeo`)^&1y{uV&/s' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
