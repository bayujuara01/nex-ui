import { useMantineTheme } from '@mantine/core';
import classes from './Jumbotron.module.css';

export function Hero() {
  const theme = useMantineTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1442 264"
      className={classes.heroSvg}
    >
      <path
        fill="currentColor"
        d="M94.488 103.552c.288.672.24 1.248-.144 1.728s-.96.72-1.728.72H71.16c-1.344 0-2.208-.576-2.592-1.728l-3.744-12.096H30.408l-3.744 12.096c-.384 1.152-1.2 1.728-2.448 1.728H2.76c-.768 0-1.344-.24-1.728-.72-.384-.48-.432-1.056-.144-1.728l33.12-96.624C34.488 5.776 35.4 5.2 36.744 5.2h21.744c1.44 0 2.4.576 2.88 1.728l33.12 96.624zM37.464 70h20.448L47.688 37.168 37.464 70zM1150.52 103.408c1.06 1.728.58 2.592-1.44 2.592h-21.89c-1.15 0-2.01-.48-2.59-1.44l-19.87-32.544h-3.17v31.68c0 1.536-.77 2.304-2.3 2.304h-20.59c-1.44 0-2.16-.768-2.16-2.304V7.504c0-1.536.72-2.304 2.16-2.304h31.68c12 0 21.07 3.024 27.21 9.072 6.15 5.952 9.22 14.064 9.22 24.336 0 14.976-6 25.008-18 30.096l21.74 34.704zm-48.96-76.032V49.84h8.21c8.74 0 13.1-3.744 13.1-11.232 0-7.488-4.36-11.232-13.1-11.232h-8.21zM1194.31 107.728c-11.52 0-20.93-3.456-28.23-10.368-7.29-7.008-10.94-15.984-10.94-26.928 0-10.56 3.36-19.296 10.08-26.208 6.81-7.008 15.65-10.512 26.49-10.512 10.47 0 18.77 3.264 24.92 9.792 6.14 6.528 9.21 14.544 9.21 24.048 0 4.128-.67 7.248-2.01 9.36-1.25 2.016-3.56 3.024-6.92 3.024h-38.16c2.4 5.952 8.26 8.928 17.57 8.928 5.57 0 10.42-1.104 14.55-3.312 1.05-.48 1.92-.192 2.59.864l6.62 9.216c.77 1.152.53 2.256-.72 3.312-5.76 5.856-14.11 8.784-25.05 8.784zm-15.99-44.352h26.07c-1.25-6.624-5.43-9.936-12.53-9.936-7.3 0-11.81 3.312-13.54 9.936zM1266.44 107.728c-9.6 0-17.47-3.504-23.62-10.512-6.14-7.104-9.21-15.936-9.21-26.496 0-10.464 3.07-19.248 9.21-26.352 6.15-7.104 14.02-10.656 23.62-10.656 9.41 0 16.46 3.264 21.17 9.792l.28-5.76c0-1.536.77-2.304 2.31-2.304h17.85c1.54 0 2.31.768 2.31 2.304v65.952c0 .672-.24 1.248-.72 1.728-.48.384-1.06.576-1.73.576h-17.71c-1.54 0-2.31-.768-2.31-2.304l-.28-5.904c-5.09 6.624-12.15 9.936-21.17 9.936zm-5.04-26.064c2.78 2.784 6.29 4.176 10.51 4.176s7.68-1.392 10.37-4.176c2.69-2.784 4.03-6.48 4.03-11.088 0-4.512-1.34-8.112-4.03-10.8-2.59-2.784-6.05-4.176-10.37-4.176-4.22 0-7.73 1.392-10.51 4.176-2.79 2.784-4.18 6.432-4.18 10.944 0 4.512 1.39 8.16 4.18 10.944zM1359.36 107.728c-10.85 0-19.82-3.552-26.93-10.656-7.1-7.2-10.65-16.128-10.65-26.784 0-10.368 3.45-19.056 10.37-26.064 7-7.008 15.84-10.512 26.49-10.512 11.81 0 21.03 4.368 27.65 13.104.86 1.056.77 2.112-.29 3.168l-11.09 10.656c-1.34 1.344-2.64 1.344-3.88 0-3.46-3.168-7.2-4.752-11.24-4.752-4.6 0-8.25 1.392-10.94 4.176-2.59 2.784-3.89 6.192-3.89 10.224 0 4.128 1.35 7.728 4.03 10.8 2.79 2.976 6.53 4.464 11.24 4.464 3.93 0 7.58-1.632 10.94-4.896 1.25-1.248 2.54-1.2 3.89.144l11.09 10.656c1.05 1.056 1.15 2.112.28 3.168-6.62 8.736-15.64 13.104-27.07 13.104zM1428.34 107.728c-6.92 0-12.68-1.776-17.28-5.328-4.61-3.648-6.92-9.504-6.92-17.568V54.016h-8.78c-1.44 0-2.16-.768-2.16-2.304V37.744c0-1.536.72-2.304 2.16-2.304h8.78V19.024c0-1.536.77-2.304 2.31-2.304h19.87c1.54 0 2.3.768 2.3 2.304V35.44h10.52c1.53 0 2.3.768 2.3 2.304v13.968c0 1.536-.77 2.304-2.3 2.304h-10.52V82.24c0 1.728.58 3.072 1.73 4.032s2.59 1.44 4.32 1.44c1.63 0 3.12-.048 4.47-.144 1.63 0 2.44.72 2.44 2.16v13.248c0 1.632-1.39 2.832-4.17 3.6-2.69.768-5.71 1.152-9.07 1.152zM38.472 237.728c-10.848 0-19.824-3.552-26.928-10.656C4.44 219.872.888 210.944.888 200.288c0-10.368 3.456-19.056 10.368-26.064 7.008-7.008 15.84-10.512 26.496-10.512 11.808 0 21.024 4.368 27.648 13.104.864 1.056.768 2.112-.288 3.168L54.024 190.64c-1.344 1.344-2.64 1.344-3.888 0-3.456-3.168-7.2-4.752-11.232-4.752-4.608 0-8.256 1.392-10.944 4.176-2.592 2.784-3.888 6.192-3.888 10.224 0 4.128 1.344 7.728 4.032 10.8 2.784 2.976 6.528 4.464 11.232 4.464 3.936 0 7.584-1.632 10.944-4.896 1.248-1.248 2.544-1.2 3.888.144l11.088 10.656c1.056 1.056 1.152 2.112.288 3.168-6.624 8.736-15.648 13.104-27.072 13.104zM108.215 237.728c-10.752 0-19.68-3.552-26.784-10.656-7.008-7.104-10.512-15.888-10.512-26.352s3.504-19.248 10.512-26.352c7.104-7.104 16.032-10.656 26.784-10.656 10.656 0 19.488 3.552 26.496 10.656 7.104 7.104 10.656 15.888 10.656 26.352s-3.552 19.248-10.656 26.352c-7.008 7.104-15.84 10.656-26.496 10.656zm0-22.176c3.936 0 7.248-1.344 9.936-4.032 2.688-2.688 4.032-6.288 4.032-10.8 0-4.512-1.344-8.112-4.032-10.8-2.688-2.688-6-4.032-9.936-4.032-4.032 0-7.392 1.344-10.08 4.032-2.688 2.688-4.032 6.288-4.032 10.8 0 4.512 1.344 8.112 4.032 10.8 2.688 2.688 6.048 4.032 10.08 4.032zM159.089 236c-1.536 0-2.304-.768-2.304-2.304v-65.952c0-1.536.768-2.304 2.304-2.304h19.008c1.44 0 2.16.816 2.16 2.448l.576 7.056c4.512-7.488 11.088-11.232 19.728-11.232 8.928 0 15.456 3.936 19.584 11.808 4.8-7.872 12-11.808 21.6-11.808 7.776 0 13.872 2.592 18.288 7.776 4.416 5.088 6.624 12.24 6.624 21.456v40.752c0 1.536-.768 2.304-2.304 2.304h-19.584c-1.536 0-2.304-.768-2.304-2.304v-34.992c0-8.544-3.12-12.816-9.36-12.816-6.24 0-9.36 4.272-9.36 12.816v34.992c0 1.536-.768 2.304-2.304 2.304h-19.296c-1.728 0-2.592-.768-2.592-2.304v-34.992c0-8.544-3.072-12.816-9.216-12.816-6.24 0-9.36 4.272-9.36 12.816v34.992c0 1.536-.768 2.304-2.304 2.304h-19.584zM283.823 263.36c-1.536 0-2.304-.768-2.304-2.304v-93.312c0-1.536.768-2.304 2.304-2.304h17.856c1.536 0 2.304.768 2.304 2.304l.288 5.76c4.704-6.528 11.76-9.792 21.168-9.792 9.6 0 17.472 3.552 23.616 10.656 6.144 7.104 9.216 15.888 9.216 26.352 0 10.56-3.072 19.392-9.216 26.496-6.144 7.008-14.016 10.512-23.616 10.512-8.064 0-14.592-2.64-19.584-7.92v31.248c0 1.536-.768 2.304-2.304 2.304h-19.728zm25.776-51.696c2.688 2.784 6.144 4.176 10.368 4.176s7.728-1.392 10.512-4.176c2.784-2.784 4.176-6.432 4.176-10.944 0-4.512-1.392-8.16-4.176-10.944-2.784-2.784-6.288-4.176-10.512-4.176-4.32 0-7.824 1.392-10.512 4.176-2.592 2.688-3.888 6.288-3.888 10.8 0 4.608 1.344 8.304 4.032 11.088zM403.387 237.728c-10.752 0-19.68-3.552-26.784-10.656-7.008-7.104-10.512-15.888-10.512-26.352s3.504-19.248 10.512-26.352c7.104-7.104 16.032-10.656 26.784-10.656 10.656 0 19.488 3.552 26.496 10.656 7.104 7.104 10.656 15.888 10.656 26.352s-3.552 19.248-10.656 26.352c-7.008 7.104-15.84 10.656-26.496 10.656zm0-22.176c3.936 0 7.248-1.344 9.936-4.032 2.688-2.688 4.032-6.288 4.032-10.8 0-4.512-1.344-8.112-4.032-10.8-2.688-2.688-6-4.032-9.936-4.032-4.032 0-7.392 1.344-10.08 4.032-2.688 2.688-4.032 6.288-4.032 10.8 0 4.512 1.344 8.112 4.032 10.8 2.688 2.688 6.048 4.032 10.08 4.032zM454.261 236c-1.536 0-2.304-.768-2.304-2.304v-65.952c0-1.536.768-2.304 2.304-2.304h19.008c1.44 0 2.16.816 2.16 2.448l.72 7.92c4.512-8.064 11.232-12.096 20.16-12.096 7.488 0 13.584 2.64 18.288 7.92 4.8 5.28 7.2 12.384 7.2 21.312v40.752c0 .672-.24 1.248-.72 1.728-.48.384-1.056.576-1.728.576h-19.44c-1.536 0-2.304-.768-2.304-2.304v-34.704c0-8.736-3.552-13.104-10.656-13.104-7.2 0-10.8 4.368-10.8 13.104v34.704c0 1.536-.768 2.304-2.304 2.304h-19.584zM572.181 237.728c-11.52 0-20.928-3.456-28.224-10.368-7.296-7.008-10.944-15.984-10.944-26.928 0-10.56 3.36-19.296 10.08-26.208 6.816-7.008 15.648-10.512 26.496-10.512 10.464 0 18.768 3.264 24.912 9.792 6.144 6.528 9.216 14.544 9.216 24.048 0 4.128-.672 7.248-2.016 9.36-1.248 2.016-3.552 3.024-6.912 3.024h-38.16c2.4 5.952 8.256 8.928 17.568 8.928 5.568 0 10.416-1.104 14.544-3.312 1.056-.48 1.92-.192 2.592.864l6.624 9.216c.768 1.152.528 2.256-.72 3.312-5.76 5.856-14.112 8.784-25.056 8.784zm-15.984-44.352h26.064c-1.248-6.624-5.424-9.936-12.528-9.936-7.296 0-11.808 3.312-13.536 9.936zM617.386 236c-1.536 0-2.304-.768-2.304-2.304v-65.952c0-1.536.768-2.304 2.304-2.304h19.008c1.44 0 2.16.816 2.16 2.448l.72 7.92c4.512-8.064 11.232-12.096 20.16-12.096 7.488 0 13.584 2.64 18.288 7.92 4.8 5.28 7.2 12.384 7.2 21.312v40.752c0 .672-.24 1.248-.72 1.728-.48.384-1.056.576-1.728.576h-19.44c-1.536 0-2.304-.768-2.304-2.304v-34.704c0-8.736-3.552-13.104-10.656-13.104-7.2 0-10.8 4.368-10.8 13.104v34.704c0 1.536-.768 2.304-2.304 2.304h-19.584zM727.741 237.728c-6.912 0-12.672-1.776-17.28-5.328-4.608-3.648-6.912-9.504-6.912-17.568v-30.816h-8.784c-1.44 0-2.159-.768-2.159-2.304v-13.968c0-1.536.719-2.304 2.159-2.304h8.784v-16.416c0-1.536.768-2.304 2.304-2.304h19.873c1.536 0 2.303.768 2.303 2.304v16.416h10.512c1.536 0 2.304.768 2.304 2.304v13.968c0 1.536-.768 2.304-2.304 2.304h-10.512v28.224c0 1.728.576 3.072 1.728 4.032 1.152.96 2.592 1.44 4.32 1.44 1.632 0 3.12-.048 4.464-.144 1.632 0 2.448.72 2.448 2.16v13.248c0 1.632-1.392 2.832-4.176 3.6-2.688.768-5.712 1.152-9.072 1.152zM777.82 237.728c-11.712 0-21.024-4.08-27.936-12.24-.96-1.056-.768-2.496.576-4.32l6.336-8.928c.96-1.536 2.208-1.824 3.744-.864 6.336 4.224 11.568 6.336 15.696 6.336 3.456 0 5.184-1.152 5.184-3.456 0-1.056-.384-1.92-1.152-2.592-.768-.672-2.256-1.488-4.464-2.448l-9.216-3.6c-10.176-3.936-15.264-10.464-15.264-19.584 0-6.816 2.496-12.24 7.488-16.272 5.088-4.032 11.28-6.048 18.576-6.048 10.176 0 18.48 3.792 24.912 11.376.864.96.816 1.92-.144 2.88l-8.208 9.792c-.768.96-1.872.96-3.312 0-4.704-3.552-8.688-5.328-11.952-5.328-2.976 0-4.464 1.2-4.464 3.6 0 1.92 1.488 3.408 4.464 4.464l11.232 4.464c10.464 4.128 15.648 10.944 15.552 20.448-.096 7.104-2.784 12.624-8.064 16.56-5.28 3.84-11.808 5.76-19.584 5.76zM847.448 236c-1.536 0-2.304-.768-2.304-2.304v-98.352c0-1.536.768-2.304 2.304-2.304h19.728c1.536 0 2.304.768 2.304 2.304v98.352c0 1.536-.768 2.304-2.304 2.304h-19.728zM906.263 151.76c-2.496 2.496-5.616 3.744-9.36 3.744-3.744 0-6.864-1.248-9.36-3.744-2.496-2.496-3.744-5.616-3.744-9.36 0-3.648 1.248-6.72 3.744-9.216 2.496-2.496 5.616-3.744 9.36-3.744 3.744 0 6.864 1.248 9.36 3.744 2.496 2.496 3.744 5.568 3.744 9.216 0 3.648-1.248 6.768-3.744 9.36zM886.967 236c-1.536 0-2.304-.768-2.304-2.304v-65.952c0-1.536.768-2.304 2.304-2.304h19.872c1.536 0 2.304.768 2.304 2.304v65.952c0 1.536-.768 2.304-2.304 2.304h-19.872zM968.236 237.728c-9.024 0-16.08-3.312-21.168-9.936l-.288 5.904c0 1.536-.768 2.304-2.304 2.304h-17.712c-.672 0-1.248-.192-1.728-.576a2.357 2.357 0 01-.72-1.728v-98.352c0-1.536.768-2.304 2.304-2.304h19.728c1.536 0 2.304.768 2.304 2.304v36c4.608-5.088 11.136-7.632 19.584-7.632 9.6 0 17.472 3.552 23.616 10.656 6.144 7.104 9.218 15.888 9.218 26.352 0 10.56-3.074 19.392-9.218 26.496-6.144 7.008-14.016 10.512-23.616 10.512zm-15.84-26.064c2.688 2.784 6.144 4.176 10.368 4.176s7.728-1.392 10.512-4.176c2.784-2.784 4.176-6.432 4.176-10.944 0-4.512-1.392-8.16-4.176-10.944-2.784-2.784-6.288-4.176-10.512-4.176-4.32 0-7.824 1.392-10.512 4.176-2.592 2.688-3.888 6.288-3.888 10.8 0 4.608 1.344 8.304 4.032 11.088zM1014.79 236c-1.53 0-2.3-.768-2.3-2.304v-65.952c0-1.536.77-2.304 2.3-2.304h19.01c1.44 0 2.16.816 2.16 2.448l.72 9.504c2.69-9.12 7.58-13.68 14.69-13.68 2.88 0 5.04.624 6.48 1.872.96.672 1.44 1.728 1.44 3.168v15.552c0 1.632-1.01 2.256-3.03 1.872-2.4-.48-4.17-.72-5.32-.72-4.42 0-7.92 1.344-10.52 4.032-2.49 2.592-3.74 6.528-3.74 11.808v32.4c0 1.536-.77 2.304-2.3 2.304h-19.59zM1098.25 237.728c-9.6 0-17.47-3.504-23.61-10.512-6.15-7.104-9.22-15.936-9.22-26.496 0-10.464 3.07-19.248 9.22-26.352 6.14-7.104 14.01-10.656 23.61-10.656 9.41 0 16.47 3.264 21.17 9.792l.29-5.76c0-1.536.77-2.304 2.3-2.304h17.86c1.53 0 2.3.768 2.3 2.304v65.952c0 .672-.24 1.248-.72 1.728-.48.384-1.05.576-1.73.576h-17.71c-1.53 0-2.3-.768-2.3-2.304l-.29-5.904c-5.09 6.624-12.14 9.936-21.17 9.936zm-5.04-26.064c2.79 2.784 6.29 4.176 10.51 4.176 4.23 0 7.68-1.392 10.37-4.176 2.69-2.784 4.03-6.48 4.03-11.088 0-4.512-1.34-8.112-4.03-10.8-2.59-2.784-6.05-4.176-10.37-4.176-4.22 0-7.72 1.392-10.51 4.176-2.78 2.784-4.17 6.432-4.17 10.944 0 4.512 1.39 8.16 4.17 10.944zM1159.5 236c-1.54 0-2.31-.768-2.31-2.304v-65.952c0-1.536.77-2.304 2.31-2.304h19c1.44 0 2.16.816 2.16 2.448l.72 9.504c2.69-9.12 7.59-13.68 14.69-13.68 2.88 0 5.04.624 6.48 1.872.96.672 1.44 1.728 1.44 3.168v15.552c0 1.632-1.01 2.256-3.02 1.872-2.4-.48-4.18-.72-5.33-.72-4.42 0-7.92 1.344-10.51 4.032-2.5 2.592-3.75 6.528-3.75 11.808v32.4c0 1.536-.76 2.304-2.3 2.304h-19.58zM1229.67 263.36c-2.11 0-2.73-.864-1.87-2.592L1238.17 236l-27.36-68.112c-.58-1.632.05-2.448 1.87-2.448h20.02c1.34 0 2.25.576 2.73 1.728l14.4 40.608 14.55-40.608c.38-1.152 1.29-1.728 2.73-1.728h20.02c1.73 0 2.3.816 1.73 2.448l-37.3 93.744c-.48 1.152-1.39 1.728-2.74 1.728h-19.15z"
      />
      <path
        fill="url(#hero-a)"
        d="M141.984 106c-1.536 0-2.304-.768-2.304-2.304v-49.68h-8.352c-1.44 0-2.16-.768-2.16-2.304V37.744c0-1.536.72-2.304 2.16-2.304h8.352v-8.784c0-17.28 8.928-25.92 26.784-25.92 4.896 0 9.072.912 12.528 2.736.864.384 1.296 1.152 1.296 2.304v16.128c0 .864-.624 1.2-1.872 1.008-3.456-.576-5.568-.864-6.336-.864-3.072 0-5.184.672-6.336 2.016-1.152 1.248-1.728 3.12-1.728 5.616v5.76h14.112c1.44 0 2.16.768 2.16 2.304v13.968c0 1.536-.72 2.304-2.16 2.304h-14.112v49.68c0 1.536-.768 2.304-2.304 2.304h-19.728z"
      />
      <path
        fill="url(#hero-b)"
        d="M214.941 107.728c-7.392 0-13.488-2.64-18.288-7.92-4.704-5.28-7.056-12.384-7.056-21.312V37.744c0-1.536.768-2.304 2.304-2.304h19.584c1.536 0 2.304.768 2.304 2.304v34.704c0 8.736 3.552 13.104 10.656 13.104 7.2 0 10.8-4.368 10.8-13.104V37.744c0-1.536.768-2.304 2.304-2.304h19.44c.672 0 1.248.24 1.728.72.48.384.72.912.72 1.584v65.952c0 .672-.24 1.248-.72 1.728-.48.384-1.056.576-1.728.576h-18.864c-1.536 0-2.304-.816-2.304-2.448l-.576-7.92c-4.512 8.064-11.28 12.096-20.304 12.096z"
      />
      <path
        fill="url(#hero-c)"
        d="M276.558 106c-1.536 0-2.304-.768-2.304-2.304V5.344c0-1.536.768-2.304 2.304-2.304h19.728c1.536 0 2.304.768 2.304 2.304v98.352c0 1.536-.768 2.304-2.304 2.304h-19.728z"
      />
      <path
        fill="url(#hero-d)"
        d="M315.933 106c-1.536 0-2.304-.768-2.304-2.304V5.344c0-1.536.768-2.304 2.304-2.304h19.728c1.536 0 2.304.768 2.304 2.304v98.352c0 1.536-.768 2.304-2.304 2.304h-19.728z"
      />
      <path
        fill="url(#hero-e)"
        d="M367.548 133.36c-2.112 0-2.736-.864-1.872-2.592L376.044 106l-27.36-68.112c-.576-1.632.048-2.448 1.872-2.448h20.016c1.344 0 2.256.576 2.736 1.728l14.4 40.608 14.544-40.608c.384-1.152 1.296-1.728 2.736-1.728h20.016c1.728 0 2.304.816 1.728 2.448l-37.296 93.744c-.48 1.152-1.392 1.728-2.736 1.728h-19.152z"
      />
      <path
        fill="url(#hero-f)"
        d="M473.578 106c-1.536 0-2.304-.768-2.304-2.304v-49.68h-8.352c-1.44 0-2.16-.768-2.16-2.304V37.744c0-1.536.72-2.304 2.16-2.304h8.352v-8.784c0-17.28 8.928-25.92 26.784-25.92 4.896 0 9.072.912 12.528 2.736.864.384 1.296 1.152 1.296 2.304v16.128c0 .864-.624 1.2-1.872 1.008-3.456-.576-5.568-.864-6.336-.864-3.072 0-5.184.672-6.336 2.016-1.152 1.248-1.728 3.12-1.728 5.616v5.76h14.112c1.44 0 2.16.768 2.16 2.304v13.968c0 1.536-.72 2.304-2.16 2.304H495.61v49.68c0 1.536-.768 2.304-2.304 2.304h-19.728z"
      />
      <path
        fill="url(#hero-g)"
        d="M553.806 107.728c-11.52 0-20.928-3.456-28.224-10.368-7.296-7.008-10.944-15.984-10.944-26.928 0-10.56 3.36-19.296 10.08-26.208 6.816-7.008 15.648-10.512 26.496-10.512 10.464 0 18.768 3.264 24.912 9.792 6.144 6.528 9.216 14.544 9.216 24.048 0 4.128-.672 7.248-2.016 9.36-1.248 2.016-3.552 3.024-6.912 3.024h-38.16c2.4 5.952 8.256 8.928 17.568 8.928 5.568 0 10.416-1.104 14.544-3.312 1.056-.48 1.92-.192 2.592.864l6.624 9.216c.768 1.152.528 2.256-.72 3.312-5.76 5.856-14.112 8.784-25.056 8.784zm-15.984-44.352h26.064c-1.248-6.624-5.424-9.936-12.528-9.936-7.296 0-11.808 3.312-13.536 9.936z"
      />
      <path
        fill="url(#hero-h)"
        d="M625.939 107.728c-9.6 0-17.472-3.504-23.616-10.512-6.144-7.104-9.216-15.936-9.216-26.496 0-10.464 3.072-19.248 9.216-26.352 6.144-7.104 14.016-10.656 23.616-10.656 9.408 0 16.464 3.264 21.168 9.792l.288-5.76c0-1.536.768-2.304 2.304-2.304h17.856c1.536 0 2.304.768 2.304 2.304v65.952c0 .672-.24 1.248-.72 1.728-.48.384-1.056.576-1.728.576h-17.712c-1.536 0-2.304-.768-2.304-2.304l-.288-5.904c-5.088 6.624-12.144 9.936-21.168 9.936zm-5.04-26.064c2.784 2.784 6.288 4.176 10.512 4.176s7.68-1.392 10.368-4.176c2.688-2.784 4.032-6.48 4.032-11.088 0-4.512-1.344-8.112-4.032-10.8-2.592-2.784-6.048-4.176-10.368-4.176-4.224 0-7.728 1.392-10.512 4.176-2.784 2.784-4.176 6.432-4.176 10.944 0 4.512 1.392 8.16 4.176 10.944z"
      />
      <path
        fill="url(#hero-i)"
        d="M715.695 107.728c-6.912 0-12.672-1.776-17.28-5.328-4.608-3.648-6.912-9.504-6.912-17.568V54.016h-8.784c-1.44 0-2.16-.768-2.16-2.304V37.744c0-1.536.72-2.304 2.16-2.304h8.784V19.024c0-1.536.768-2.304 2.304-2.304h19.872c1.536 0 2.304.768 2.304 2.304V35.44h10.512c1.536 0 2.304.768 2.304 2.304v13.968c0 1.536-.768 2.304-2.304 2.304h-10.512V82.24c0 1.728.576 3.072 1.728 4.032 1.152.96 2.592 1.44 4.32 1.44 1.632 0 3.12-.048 4.464-.144 1.632 0 2.448.72 2.448 2.16v13.248c0 1.632-1.392 2.832-4.176 3.6-2.688.768-5.712 1.152-9.072 1.152z"
      />
      <path
        fill="url(#hero-j)"
        d="M764.785 107.728c-7.392 0-13.488-2.64-18.288-7.92-4.704-5.28-7.056-12.384-7.056-21.312V37.744c0-1.536.768-2.304 2.304-2.304h19.584c1.536 0 2.304.768 2.304 2.304v34.704c0 8.736 3.552 13.104 10.656 13.104 7.2 0 10.8-4.368 10.8-13.104V37.744c0-1.536.768-2.304 2.304-2.304h19.44c.672 0 1.248.24 1.728.72.48.384.72.912.72 1.584v65.952c0 .672-.24 1.248-.72 1.728-.48.384-1.056.576-1.728.576h-18.864c-1.536 0-2.304-.816-2.304-2.448l-.576-7.92c-4.512 8.064-11.28 12.096-20.304 12.096z"
      />
      <path
        fill="url(#hero-k)"
        d="M826.401 106c-1.536 0-2.304-.768-2.304-2.304V37.744c0-1.536.768-2.304 2.304-2.304h19.008c1.44 0 2.16.816 2.16 2.448l.72 9.504c2.688-9.12 7.584-13.68 14.688-13.68 2.88 0 5.04.624 6.48 1.872.96.672 1.44 1.728 1.44 3.168v15.552c0 1.632-1.008 2.256-3.024 1.872-2.4-.48-4.176-.72-5.328-.72-4.416 0-7.92 1.344-10.512 4.032-2.496 2.592-3.744 6.528-3.744 11.808v32.4c0 1.536-.768 2.304-2.304 2.304h-19.584z"
      />
      <path
        fill="url(#hero-l)"
        d="M916.197 107.728c-11.52 0-20.928-3.456-28.224-10.368-7.296-7.008-10.944-15.984-10.944-26.928 0-10.56 3.36-19.296 10.08-26.208 6.816-7.008 15.648-10.512 26.496-10.512 10.464 0 18.768 3.264 24.912 9.792 6.144 6.528 9.216 14.544 9.216 24.048 0 4.128-.672 7.248-2.016 9.36-1.248 2.016-3.552 3.024-6.912 3.024h-38.16c2.4 5.952 8.256 8.928 17.568 8.928 5.568 0 10.416-1.104 14.544-3.312 1.056-.48 1.92-.192 2.592.864l6.624 9.216c.768 1.152.528 2.256-.72 3.312-5.76 5.856-14.112 8.784-25.056 8.784zm-15.984-44.352h26.064c-1.248-6.624-5.424-9.936-12.528-9.936-7.296 0-11.808 3.312-13.536 9.936z"
      />
      <path
        fill="url(#hero-m)"
        d="M988.329 107.728c-9.6 0-17.472-3.504-23.616-10.512-6.144-7.104-9.216-15.936-9.216-26.496 0-10.464 3.072-19.248 9.216-26.352 6.144-7.104 14.016-10.656 23.616-10.656 8.448 0 14.981 2.544 19.581 7.632v-36c0-1.536.77-2.304 2.31-2.304h19.73c1.53 0 2.3.768 2.3 2.304v98.352c0 .672-.24 1.248-.72 1.728-.48.384-1.06.576-1.73.576h-17.71c-1.54 0-2.3-.768-2.3-2.304l-.29-5.904c-5.09 6.624-12.147 9.936-21.171 9.936zm-5.04-26.064c2.784 2.784 6.288 4.176 10.512 4.176s7.679-1.392 10.369-4.176c2.69-2.784 4.03-6.48 4.03-11.088 0-4.512-1.34-8.112-4.03-10.8-2.59-2.784-6.049-4.176-10.369-4.176-4.224 0-7.728 1.392-10.512 4.176-2.784 2.784-4.176 6.432-4.176 10.944 0 4.512 1.392 8.16 4.176 10.944z"
      />
      <defs>
        <linearGradient
          id="hero-a"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-b"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-c"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-d"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-e"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-f"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-g"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-h"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-i"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-j"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-k"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-l"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
        <linearGradient
          id="hero-m"
          x1="1011"
          x2="150.116"
          y1="30.032"
          y2="47.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.cyan[4]} />
          <stop offset="1" stopColor={theme.colors.blue[6]} />
        </linearGradient>
      </defs>
    </svg>
  );
}
