/* ═══════════════════════════════════════════════════════════
   UPTIME – Common Application Logic
   White Minimalistic 2.0 · Hugeicons
   ═══════════════════════════════════════════════════════════ */

const App = (function () {
    'use strict';

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    /* ── Hugeicons SVG Library (stroke-rounded, 24×24) ── */
    const ICONS = {
        // Navigation
        dashboard: '<path d="M2.5 8C2.5 4.962 4.962 2.5 8 2.5H16C19.038 2.5 21.5 4.962 21.5 8V16C21.5 19.038 19.038 21.5 16 21.5H8C4.962 21.5 2.5 19.038 2.5 16V8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M11 2.5V21.5M2.5 11.5H21.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',

        activity: '<path d="M4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 14L9.79289 11.2071C10.1834 10.8166 10.8166 10.8166 11.2071 11.2071L12.7929 12.7929C13.1834 13.1834 13.8166 13.1834 14.2071 12.7929L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        file: '<path d="M8 17H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5M20 10.6569V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V9.45584C4 6.21082 4 4.58831 4.88607 3.48933C5.06508 3.26731 5.26731 3.06508 5.48933 2.88607C6.58831 2 8.21082 2 11.4558 2C12.1614 2 12.5141 2 12.8372 2.11401C12.9044 2.13772 12.9702 2.165 13.0345 2.19575C13.3436 2.34355 13.593 2.593 14.0919 3.09188L18.8284 7.82843C19.4065 8.40649 19.6955 8.69552 19.8478 9.06306C20 9.4306 20 9.83935 20 10.6569Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        alert: '<path d="M12 2L2 20H22L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9V14M12 17V17.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',

        notification: '<path d="M18.8519 13.9015C18.8519 13.9015 21 15.5492 21 16.5C21 17.4508 19.8667 18 19 18H5C4.13333 18 3 17.4508 3 16.5C3 15.5492 5.14815 13.9015 5.14815 13.9015C5.45938 13.6841 5.63333 13.3323 5.63333 12.9567V9.5C5.63333 5.91015 8.48356 3 12 3C15.5164 3 18.3667 5.91015 18.3667 9.5V12.9567C18.3667 13.3323 18.5406 13.6841 18.8519 13.9015Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 19C9.5 20.3807 10.6193 21.5 12 21.5C13.3807 21.5 14.5 20.3807 14.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        'credit-card': '<path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 16L18 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 9H22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',

        'chart-bar': '<path d="M21 21H3.6C3.26863 21 3 20.7314 3 20.4V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 16V10M12 16V6M17 16V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        settings: '<path d="M10.2974 3.01168L10.0264 4.55194C9.88241 5.36952 9.09459 5.88267 8.29177 5.68112C7.37894 5.45203 6.44299 5.45203 5.53016 5.68112C4.72734 5.88267 3.93952 5.36952 3.79555 4.55194L3.52445 3.01168C3.39867 2.29656 4.02027 1.68172 4.75705 1.84883C6.38604 2.21822 8.08373 2.21822 9.71272 1.84883C10.4495 1.68172 11.0711 2.29656 10.9453 3.01168Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5"/><path d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4.5 12C4.5 7.85786 7.85786 4.5 12 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M20.2044 19.4481L20.4755 20.9883C20.6013 21.7034 19.9797 22.3183 19.2429 22.1512C17.614 21.7818 15.9163 21.7818 14.2873 22.1512C13.5505 22.3183 12.9289 21.7034 13.0547 20.9883L13.3258 19.4481C13.4698 18.6305 14.2576 18.1173 15.0604 18.3189C15.9732 18.548 16.9092 18.548 17.822 18.3189C18.6248 18.1173 19.4126 18.6305 19.5566 19.4481Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M20.9883 10.2974L19.4481 10.0264C18.6305 9.88241 18.1173 9.09459 18.3189 8.29177C18.548 7.37894 18.548 6.44299 18.3189 5.53016C18.1173 4.72734 18.6305 3.93952 19.4481 3.79555L20.9883 3.52445C21.7034 3.39867 22.3183 4.02027 22.1512 4.75705C21.7818 6.38604 21.7818 8.08373 22.1512 9.71272C22.3183 10.4495 21.7034 11.0711 20.9883 10.9453Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3.01168 13.7026L4.55194 13.9736C5.36952 14.1176 5.88267 14.9054 5.68112 15.7082C5.45203 16.6211 5.45203 17.557 5.68112 18.4698C5.88267 19.2727 5.36952 20.0605 4.55194 20.2044L3.01168 20.4755C2.29656 20.6013 1.68172 19.9797 1.84883 19.2429C2.21822 17.614 2.21822 15.9163 1.84883 14.2873C1.68172 13.5505 2.29656 12.9289 3.01168 13.0547Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',

        dollar: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 11.5 12 11.5C13.3807 11.5 14.5 12.1193 14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        package: '<path d="M12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613C3 16.7742 3 10.0645 3 7M12 22C12.8182 22 13.5998 21.6698 15.1631 21.0095C19.0544 19.3657 21 18.5438 21 17.1613V7M12 22L12 11.3548" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 12L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 4L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        invoice: '<path d="M4 18.6458V8.05426C4 5.20025 4 3.77325 4.87868 2.88663C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.88663C20 3.77325 20 5.20025 20 8.05426V18.6458C20 20.1575 20 20.9133 19.538 21.2108C18.7831 21.6918 17.6161 20.6781 17.0291 20.3018C16.5441 20.0042 16.3017 19.8553 16.0325 19.8489C15.7471 19.8422 15.4913 19.9937 14.9655 20.3018L13.0345 21.4326C12.5087 21.7407 12.2458 21.8948 11.9606 21.8989C11.6753 21.903 11.4086 21.7554 10.875 21.4603L9.0345 20.4326C8.54933 20.1638 8.30675 20.0293 8.04061 20.0264C7.7589 20.0233 7.50839 20.1639 6.99089 20.3018C6.40893 20.4579 5.74157 21.064 5.2008 21.4603C4.72236 21.8117 4 21.4538 4 18.6458Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 6H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        coupon: '<path d="M15 9L9 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 9.25C9.5 9.38807 9.38807 9.5 9.25 9.5C9.11193 9.5 9 9.38807 9 9.25C9 9.11193 9.11193 9 9.25 9C9.38807 9 9.5 9.11193 9.5 9.25Z" stroke="currentColor" stroke-width="1.5"/><path d="M15 14.75C15 14.8881 14.8881 15 14.75 15C14.6119 15 14.5 14.8881 14.5 14.75C14.5 14.6119 14.6119 14.5 14.75 14.5C14.8881 14.5 15 14.6119 15 14.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 14.5C3.38071 14.5 4.5 13.3807 4.5 12C4.5 10.6193 3.38071 9.5 2 9.5C2 7.15442 2 5.98164 2.62 5.17372C2.78 4.96572 2.966 4.77954 3.174 4.61994C3.982 4 5.155 4 7.5 4H16.5C18.846 4 20.019 4 20.826 4.61994C21.034 4.77954 21.221 4.96572 21.38 5.17372C22 5.98164 22 7.15442 22 9.5C20.619 9.5 19.5 10.6193 19.5 12C19.5 13.3807 20.619 14.5 22 14.5C22 16.8456 22 18.0184 21.38 18.8263C21.221 19.0343 21.034 19.2205 20.826 19.3801C20.019 20 18.846 20 16.5 20H7.5C5.155 20 3.982 20 3.174 19.3801C2.966 19.2205 2.78 19.0343 2.62 18.8263C2 18.0184 2 16.8456 2 14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        'user-group': '<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M19 10C20.1046 10 21 9.10457 21 8C21 6.89543 20.1046 6 19 6C17.8954 6 17 6.89543 17 8C17 9.10457 17.8954 10 19 10Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 20C2 16.6863 4.68629 14 8 14C11.3137 14 14 16.6863 14 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 19C16 17.067 17.567 15.5 19.5 15.5C21.433 15.5 23 17.067 23 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        users: '<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M19 10C20.1046 10 21 9.10457 21 8C21 6.89543 20.1046 6 19 6C17.8954 6 17 6.89543 17 8C17 9.10457 17.8954 10 19 10Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 20C2 16.6863 4.68629 14 8 14C11.3137 14 14 16.6863 14 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 19C16 17.067 17.567 15.5 19.5 15.5C21.433 15.5 23 17.067 23 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',

        computer: '<path d="M22 17H2C2.55228 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 21.4477 17 22 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 14L5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V14H5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 7L11 9L9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 11H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        slack: '<path d="M13 9.25V3.75C13 2.7835 13.7835 2 14.75 2C15.7165 2 16.5 2.7835 16.5 3.75V9.25C16.5 10.2165 15.7165 11 14.75 11C13.7835 11 13 10.2165 13 9.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 20.25V14.75C7.5 13.7835 8.2835 13 9.25 13C10.2165 13 11 13.7835 11 14.75V20.25C11 21.2165 10.2165 22 9.25 22C8.2835 22 7.5 21.2165 7.5 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.75 13L20.25 13C21.2165 13 22 13.7835 22 14.75C22 15.7165 21.2165 16.5 20.25 16.5L14.75 16.5C13.7835 16.5 13 15.7165 13 14.75C13 13.7835 13.7835 13 14.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 7.5L9.25 7.5C10.2165 7.5 11 8.2835 11 9.25C11 10.2165 10.2165 11 9.25 11L3.75 11C2.7835 11 2 10.2165 2 9.25C2 8.2835 2.7835 7.5 3.75 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.75C7 4.7165 7.7835 5.5 8.75 5.5H10.5V3.75C10.5 2.7835 9.7165 2 8.75 2C7.7835 2 7 2.7835 7 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M17 20.25C17 19.2835 16.2165 18.5 15.25 18.5H13.5V20.25C13.5 21.2165 14.2835 22 15.25 22C16.2165 22 17 21.2165 17 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M20.25 7C19.2835 7 18.5 7.7835 18.5 8.75L18.5 10.5H20.25C21.2165 10.5 22 9.7165 22 8.75C22 7.7835 21.2165 7 20.25 7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3.75 17C4.7165 17 5.5 16.2165 5.5 15.25V13.5L3.75 13.5C2.7835 13.5 2 14.2835 2 15.25C2 16.2165 2.7835 17 3.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        discord: '<path d="M15.5 17.5C16.5 19 17.3333 19.6667 18 20C19.3333 19.6667 22 18.2 22 15C22 11.8 20.6667 7.33333 20 5.5C18 4.3 15.8333 4 15 4L14.198 5.60393C13.4135 5.28708 12.4058 5.25438 12 5.27763C11.5942 5.25438 10.5865 5.28708 9.80197 5.60393L9 4C8.16667 4 6 4.3 4 5.5C3.33333 7.33333 2 11.8 2 15C2 18.2 4.66667 19.6667 6 20C6.66667 19.6667 7.5 19 8.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.3652 11.5C17.3652 12.6046 16.5817 13.5 15.6152 13.5C14.6487 13.5 13.8652 12.6046 13.8652 11.5C13.8652 10.3954 14.6487 9.5 15.6152 9.5C16.5817 9.5 17.3652 10.3954 17.3652 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11.5C10 12.6046 9.2165 13.5 8.25 13.5C7.2835 13.5 6.5 12.6046 6.5 11.5C6.5 10.3954 7.2835 9.5 8.25 9.5C9.2165 9.5 10 10.3954 10 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 16.5C16.4022 17.3967 14.3502 18 12 18C9.64981 18 7.59785 17.3967 6.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        book: '<path d="M15.5 7H8.5M12.5 11H8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M20 22H6C4.895 22 4 21.105 4 20M4 20C4 18.895 4.895 18 6 18H20V6C20 4.114 20 3.172 19.414 2.586C18.828 2 17.886 2 16 2H10C7.172 2 5.757 2 4.879 2.879C4 3.757 4 5.172 4 8V20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        'shield-tick': '<path d="M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371L21 7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        'alert-circle': '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',

        // Topbar & Actions
        search: '<path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',

        add: '<path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        menu: '<path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        logout: '<path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        // Payment Methods
        paypal: '<path d="M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2H9.62312C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z" stroke="currentColor" stroke-width="1.5"/><path d="M8.24315 19.4998L8.01451 20.8325C7.90978 21.4429 8.38532 21.9998 9.01128 21.9998H11.0018C11.4961 21.9998 11.9179 21.6464 11.9991 21.1642L12.7285 16.8354C12.8098 16.3533 13.2316 15.9998 13.7258 15.9998H15.5289C18.11 15.9998 20.3448 14.2267 20.9047 11.7345C21.2967 9.99004 20.4437 8.30993 19 7.50098" stroke="currentColor" stroke-width="1.5"/>',
        stripe: '<path d="M17.25 4V8.5C12.9921 6.77511 10.6642 7.08164 10.5482 8.14206C10.4322 9.20249 11.9677 9.82253 12.75 10C12.75 10 18.25 11 18.25 15.5C18.25 20 13.25 21 10.75 21C8.75 21 6.58333 20.1981 5.75 19.8648V15.1633C6.54997 15.6189 8.56994 16.5633 10.25 16.6959C12.3501 16.8616 12.9123 16.3765 13.0543 15.7639C13.3132 14.6468 11.4418 13.9934 10.25 13.5C7.05 12.3 5.75 11 5.75 8.5C5.75 4 9.75 3 12.25 3C14.65 3 16.5833 3.66667 17.25 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        mollie: '<path d="M2 4.5H8.75736C9.55301 4.5 10.3161 4.81607 10.8787 5.37868L14 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 13.5H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 7.5L10.5 9.5C11.0523 10.0523 11.0523 10.9477 10.5 11.5C9.94772 12.0523 9.05229 12.0523 8.5 11.5L7 10C6.13931 10.8607 4.77671 10.9575 3.80294 10.2272L3.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 11V15.5C5 17.3856 5 18.3284 5.58579 18.9142C6.17157 19.5 7.11438 19.5 9 19.5H18C19.8856 19.5 20.8284 19.5 21.4142 18.9142C22 18.3284 22 17.3856 22 15.5V12.5C22 10.6144 22 9.67157 21.4142 9.08579C20.8284 8.5 19.8856 8.5 18 8.5H9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.25 14C15.25 14.9665 14.4665 15.75 13.5 15.75C12.5335 15.75 11.75 14.9665 11.75 14C11.75 13.0335 12.5335 12.25 13.5 12.25C14.4665 12.25 15.25 13.0335 15.25 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        paddle: '<path d="M13 3.5H14C14.93 3.5 15.395 3.5 15.7765 3.60222C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C18 6.10504 18 6.57003 18 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 5.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V13.5C21 10.6716 21 9.25736 20.1213 8.37868C19.2426 7.5 17.8284 7.5 15 7.5H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12.5H19C18.535 12.5 18.3025 12.5 18.1118 12.5511C17.5941 12.6898 17.1898 13.0941 17.0511 13.6118C17 13.8025 17 14.035 17 14.5C17 14.965 17 15.1975 17.0511 15.3882C17.1898 15.9059 17.5941 16.3102 18.1118 16.4489C18.3025 16.5 18.535 16.5 19 16.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        razorpay: '<path d="M5.22576 11.3294L12.224 2.34651C12.7713 1.64397 13.7972 2.08124 13.7972 3.01707V9.96994C13.7972 10.5305 14.1995 10.985 14.6958 10.985H18.0996C18.8729 10.985 19.2851 12.0149 18.7742 12.6706L11.776 21.6535C11.2287 22.356 10.2028 21.9188 10.2028 20.9829V14.0301C10.2028 13.4695 9.80048 13.015 9.3042 13.015H5.90035C5.12711 13.015 4.71494 11.9851 5.22576 11.3294Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        paystack: '<path d="M18.7088 3.49534C16.8165 2.55382 14.5009 2 12 2C9.4991 2 7.1835 2.55382 5.29116 3.49534C4.36318 3.95706 3.89919 4.18792 3.4496 4.91378C3 5.63965 3 6.34248 3 7.74814V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4338C10.9067 21.8113 11.2735 22 12 22C12.7265 22 13.0933 21.8113 13.8269 21.4338C16.4576 20.0804 21 16.9205 21 11.2371L21 7.74814C21 6.34249 21 5.63966 20.5504 4.91378C20.1008 4.18791 19.6368 3.95706 18.7088 3.49534Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        coinbase: '<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M9 12H13.2M9 12V9.2963C9 8.82489 9 8.58919 9.14645 8.44274C9.29289 8.2963 9.5286 8.2963 10 8.2963H13.2C14.1941 8.2963 15 9.1254 15 10.1481C15 11.1709 14.1941 12 13.2 12M9 12V14.7037C9 15.1751 9 15.4108 9.14645 15.5572C9.29289 15.7037 9.5286 15.7037 10 15.7037H13.2C14.1941 15.7037 15 14.8746 15 13.8518C15 12.8291 14.1941 12 13.2 12M10.4938 8.2963V7M10.4938 17V15.7037M12.8982 8.2963V7M12.8982 17V15.7037" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        bitcoin: '<path d="M6 4H14.4C16.3882 4 18 5.79086 18 8C18 10.2091 16.3882 12 14.4 12M14.4 12C16.3882 12 18 13.7909 18 16C18 18.2091 16.3882 20 14.4 20H6M14.4 12H7.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 2L9 4M14 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 20L9 22M14 20V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        bank: '<path d="M12.125 5.75H12M12.25 5.75C12.25 5.88807 12.1381 6 12 6C11.8619 6 11.75 5.88807 11.75 5.75C11.75 5.61193 11.8619 5.5 12 5.5C12.1381 5.5 12.25 5.61193 12.25 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 9V19M9 9V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9V19M19 9V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.3518 9H2.64822C2.29022 9 2 8.70651 2 8.34447C2 8.12259 2.11099 7.91577 2.29495 7.79485L8.73007 3.56485C10.3171 2.52162 11.1107 2 12 2C12.8893 2 13.6829 2.52162 15.2699 3.56485L21.7051 7.79485C21.889 7.91577 22 8.12259 22 8.34447C22 8.70651 21.7098 9 21.3518 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.0397 20.2929L20.3519 19.5858C20.0707 19.2968 19.9301 19.1522 19.7514 19.0761C19.5726 19 19.3738 19 18.9762 19H5.02382C4.62621 19 4.4274 19 4.24863 19.0761C4.06987 19.1522 3.92929 19.2968 3.64814 19.5858L2.9603 20.2929C2.25356 21.0194 1.9002 21.3827 2.02456 21.6913C2.14893 22 2.64867 22 3.64814 22H20.3519C21.3513 22 21.8511 22 21.9754 21.6913C22.0998 21.3827 21.7464 21.0194 21.0397 20.2929Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        // Alert Channels
        channelEmail: '<path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8882 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        channelSMS: '<path d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.125 19H12M12.25 19C12.25 19.1381 12.1381 19.25 12 19.25C11.8619 19.25 11.75 19.1381 11.75 19C11.75 18.8619 11.8619 18.75 12 18.75C12.1381 18.75 12.25 18.8619 12.25 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        channelSlack: '<path d="M13 9.25V3.75C13 2.7835 13.7835 2 14.75 2C15.7165 2 16.5 2.7835 16.5 3.75V9.25C16.5 10.2165 15.7165 11 14.75 11C13.7835 11 13 10.2165 13 9.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 20.25V14.75C7.5 13.7835 8.2835 13 9.25 13C10.2165 13 11 13.7835 11 14.75V20.25C11 21.2165 10.2165 22 9.25 22C8.2835 22 7.5 21.2165 7.5 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.75 13L20.25 13C21.2165 13 22 13.7835 22 14.75C22 15.7165 21.2165 16.5 20.25 16.5L14.75 16.5C13.7835 16.5 13 15.7165 13 14.75C13 13.7835 13.7835 13 14.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 7.5L9.25 7.5C10.2165 7.5 11 8.2835 11 9.25C11 10.2165 10.2165 11 9.25 11L3.75 11C2.7835 11 2 10.2165 2 9.25C2 8.2835 2.7835 7.5 3.75 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.75C7 4.7165 7.7835 5.5 8.75 5.5H10.5V3.75C10.5 2.7835 9.7165 2 8.75 2C7.7835 2 7 2.7835 7 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M17 20.25C17 19.2835 16.2165 18.5 15.25 18.5H13.5V20.25C13.5 21.2165 14.2835 22 15.25 22C16.2165 22 17 21.2165 17 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M20.25 7C19.2835 7 18.5 7.7835 18.5 8.75L18.5 10.5H20.25C21.2165 10.5 22 9.7165 22 8.75C22 7.7835 21.2165 7 20.25 7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3.75 17C4.7165 17 5.5 16.2165 5.5 15.25V13.5L3.75 13.5C2.7835 13.5 2 14.2835 2 15.25C2 16.2165 2.7835 17 3.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        channelTeams: '<path d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 12C17.3431 12 16 13.3431 16 15C16 16.6569 17.3431 18 19 18C20.6569 18 22 16.6569 22 15C22 13.3431 20.6569 12 19 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12C3.34315 12 2 13.3431 2 15C2 16.6569 3.34315 18 5 18C6.65685 18 8 16.6569 8 15C8 13.3431 6.65685 12 5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 21C4 19.3431 5.34315 18 7 18H17C18.6569 18 20 19.3431 20 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        channelDiscord: '<path d="M15.5 17.5C16.5 19 17.3333 19.6667 18 20C19.3333 19.6667 22 18.2 22 15C22 11.8 20.6667 7.33333 20 5.5C18 4.3 15.8333 4 15 4L14.198 5.60393C13.4135 5.28708 12.4058 5.25438 12 5.27763C11.5942 5.25438 10.5865 5.28708 9.80197 5.60393L9 4C8.16667 4 6 4.3 4 5.5C3.33333 7.33333 2 11.8 2 15C2 18.2 4.66667 19.6667 6 20C6.66667 19.6667 7.5 19 8.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.3652 11.5C17.3652 12.6046 16.5817 13.5 15.6152 13.5C14.6487 13.5 13.8652 12.6046 13.8652 11.5C13.8652 10.3954 14.6487 9.5 15.6152 9.5C16.5817 9.5 17.3652 10.3954 17.3652 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11.5C10 12.6046 9.2165 13.5 8.25 13.5C7.2835 13.5 6.5 12.6046 6.5 11.5C6.5 10.3954 7.2835 9.5 8.25 9.5C9.2165 9.5 10 10.3954 10 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 16.5C16.4022 17.3967 14.3502 18 12 18C9.64981 18 7.59785 17.3967 6.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        channelTelegram: '<path d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        channelFlock: '<path d="M17 3C18.6568 3 20 4.34314 20 6V10C20 14.4183 16.4183 18 12 18H3.05869C2.47399 18 2 17.526 2 16.9413C2 16.6589 2.11285 16.3882 2.31345 16.1894L14.4966 4.11494C15.1353 3.40525 16.0452 3 17 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18L14 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 21H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 8L20 6V8H22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 6V8C13 13.5228 8.52285 18 3 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.875 6.5H16.75M17 6.5C17 6.63807 16.8881 6.75 16.75 6.75C16.6119 6.75 16.5 6.63807 16.5 6.5C16.5 6.36193 16.6119 6.25 16.75 6.25C16.8881 6.25 17 6.36193 17 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        channelWebhook: '<path d="M9.5 14.5L14.5 9.49995" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',

        chevronLeft: '<path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',

        'check-circle': '<path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        'alert-triangle': '<path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9.25H12.125M12.25 9.25C12.25 9.11193 12.1381 9 12 9C11.8619 9 11.75 9.11193 11.75 9.25C11.75 9.38807 11.8619 9.5 12 9.5C12.1381 9.5 12.25 9.38807 12.25 9.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        zap: '<path d="M5.22576 11.3294L12.224 2.34651C12.7713 1.64397 13.7972 2.08124 13.7972 3.01707V9.96994C13.7972 10.5305 14.1995 10.985 14.6958 10.985H18.0996C18.8729 10.985 19.2851 12.0149 18.7742 12.6706L11.776 21.6535C11.2287 22.356 10.2028 21.9188 10.2028 20.9829V14.0301C10.2028 13.4695 9.80048 13.015 9.3042 13.015H5.90035C5.12711 13.015 4.71494 11.9851 5.22576 11.3294Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        'trending-up': '<path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5 20C5.43938 16.8438 7.67642 8.7643 10.4282 8.7643C12.3301 8.7643 12.8226 12.6353 14.6864 12.6353C17.8931 12.6353 17.4282 4 21 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        clock: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        calendar: '<path d="M16 2V6M8 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 10H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        sparkles: '<path d="M12 2C12 2 12 9 19 9C12 9 12 16 12 16C12 16 12 9 5 9C12 9 12 2 12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M18 16C18 16 18 19 21 19C18 19 18 22 18 22C18 22 18 19 15 19C18 19 18 16 18 16Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 17C7 17 7 18 9 18C7 18 7 19 7 19C7 19 7 18 5 18C7 18 7 17 7 17Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        automation: '<path d="M6 18L10 14M18 6L14 10M18 18L14 14M6 6L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="4" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="4" cy="20" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="20" r="2" stroke="currentColor" stroke-width="1.5"/>',
        globe: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 22C16 22 18 17 18 12C18 7 16 2 12 2C8 2 6 7 6 12C6 17 8 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        briefcase: '<path d="M7 8V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V8M3 11C3 9.89543 3.89543 9 5 9H19C20.1046 9 21 9.89543 21 11V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V11ZM10 13V15M14 13V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        terminal: '<path d="M2 17C2 18.8856 2 19.8284 2.58579 20.4142C3.17157 21 4.11438 21 6 21H18C19.8856 21 20.8284 21 21.4142 20.4142C22 19.8284 22 18.8856 22 17V7C22 5.11438 22 4.17157 21.4142 3.58579C20.8284 3 19.8856 3 18 3H6C4.11438 3 3.17157 3 2.58579 3.58579C2 4.17157 2 5.11438 2 7V17Z" stroke="currentColor" stroke-width="1.5" /><path d="M7 9L10 12L7 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 15H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        database: '<path d="M3 7C3 8.65685 7.02944 10 12 10C16.9706 10 21 8.65685 21 7C21 5.34315 16.9706 4 12 4C7.02944 4 3 5.34315 3 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17C3 18.6569 7.02944 20 12 20C16.9706 20 21 18.6569 21 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 7V17M21 7V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        smartphone: '<path d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 18H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        copy: '<path d="M15 15V19C15 20.1046 14.1046 21 13 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H9M9 5V9M9 5C9 3.89543 9.89543 3 11 3H19C20.1046 3 21 3.89543 21 5V13C21 14.1046 20.1046 15 19 15H15M9 5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        'arrow-right': '<path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    };

    function icon(name, size = 20) {
        const d = ICONS[name] || '';
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">${d}</svg>`;
    }

    // ── Navigation Definition ─────────────────────────────
    const NAV = [
        {
            section: 'Core Monitoring', items: [
                { id: 'dashboard', label: 'Monitor Dashboard', href: 'dashboard.html', iconKey: 'chart-bar' },
                { id: 'ai-insights', label: 'AI Insights', href: 'ai-insights.html', iconKey: 'sparkles', badge: 'New' },
                { id: 'monitors', label: 'Monitors', href: 'monitors.html', iconKey: 'computer' },
                { id: 'analytics', label: 'Advanced Analytics', href: 'analytics.html', iconKey: 'chart-bar' },
                { id: 'incidents', label: 'Incidents', href: 'incidents.html', iconKey: 'alert' },
                { id: 'logs', label: 'Debug Logs', href: 'logs.html', iconKey: 'terminal' },
            ]
        },
        {
            section: 'Platform & Agency', items: [
                { id: 'status-hub', label: 'Status Hub', href: 'status-hub.html', iconKey: 'globe' },
                { id: 'clients', label: 'Client Management', href: 'clients.html', iconKey: 'user-group' },
                { id: 'alerts', label: 'Alerting', href: 'alerts.html', iconKey: 'notification' },
                { id: 'automation', label: 'Alert Automation', href: 'automation.html', iconKey: 'automation' },
            ]
        },
        {
            section: 'Administration', items: [
                { id: 'admin-dashboard', label: 'Admin Dashboard', href: 'admin-dashboard.html', iconKey: 'chart-bar' },
                { id: 'admin-revenue', label: 'Revenue Analytics', href: 'admin-revenue.html', iconKey: 'dollar' },
                { id: 'admin-settings', label: 'Settings', href: 'admin-settings-general.html', iconKey: 'settings' },
                { id: 'api-developer', label: 'API / Developer', href: 'api-developer.html', iconKey: 'database' },
                { id: 'mobile-preview', label: 'Mobile Preview', href: 'mobile-preview.html', iconKey: 'smartphone' },
            ]
        }
    ];

    const PAGE_TITLES = {
        'dashboard': 'Dashboard', 'monitors': 'Monitors', 'monitor-detail': 'Monitor Details',
        'status-pages': 'Status Pages', 'incidents': 'Incidents', 'alerts': 'Alerts & Notifications',
        'payments': 'Checkout & Payments', 'admin-dashboard': 'Admin Dashboard', 'admin-settings': 'Settings',
        'admin-payments': 'Payments Management', 'admin-plans': 'Plans Management', 'admin-taxes': 'Tax Rates',
        'admin-coupons': 'Coupons', 'admin-users': 'User Management', 'admin-monitors': 'All Monitors',
        'admin-status-pages': 'All Status Pages', 'admin-incidents': 'All Incidents',
        'ai-insights': 'AI Insights & Predictions',
        'analytics': 'Performance Analytics',
    };

    function detectPage() {
        const path = window.location.pathname;
        let page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '') || 'index';
        if (page.startsWith('admin-settings-')) return 'admin-settings';
        return page;
    }

    // ── Build Sidebar ─────────────────────────────────────
    function buildSidebar(activePage) {
        const sidebar = $('#sidebar');
        if (!sidebar) return;

        let navHTML = '';
        NAV.forEach(group => {
            navHTML += `<div class="sidebar-section-label">${group.section}</div><nav class="sidebar-nav">`;
            group.items.forEach(item => {
                const isActive = item.id === activePage;
                const badgeHTML = item.badge ? `<span class="nav-badge ${item.badgeClass || ''}">${item.badge}</span>` : '';
                navHTML += `
                    <a href="${item.href}" class="nav-item ${isActive ? 'active' : ''}" id="nav-${item.id}">
                        <span class="nav-icon">${icon(item.iconKey)}</span>
                        <span class="nav-label">${item.label}</span>
                        ${badgeHTML}
                    </a>`;
            });
            navHTML += '</nav>';
        });

        sidebar.innerHTML = `
            <div class="sidebar-header">
                <a href="dashboard.html" class="sidebar-logo">
                    <div class="sidebar-logo-icon">
                        ${icon('zap', 24)}
                    </div>
                    <span class="sidebar-brand-text">Uptime</span>
                </a>
                <button id="sidebar-collapse-btn" class="sidebar-collapse-btn" aria-label="Toggle Sidebar">
                    ${icon('chevronLeft', 18)}
                </button>
            </div>
            <div class="sidebar-nav-container">
                ${navHTML}
            </div>
            <div class="sidebar-footer">
                <div class="sidebar-user">
                    <div class="sidebar-avatar">${initials('John Doe')}</div>
                    <div class="sidebar-user-info">
                        <span class="sidebar-user-name">John Doe</span>
                        <span class="sidebar-user-plan">Pro Plan</span>
                    </div>
                    <a href="index.html" class="sidebar-logout-btn" title="Logout" id="logout-btn">
                        ${icon('logout', 16)}
                    </a>
                </div>
            </div>`;

        $('#sidebar-collapse-btn').addEventListener('click', () => sidebar.classList.toggle('collapsed'));
    }

    // ── Build Topbar ──────────────────────────────────────
    function buildTopbar(pageName) {
        const topbar = $('#topbar');
        if (!topbar) return;
        const title = PAGE_TITLES[pageName] || pageName;

        topbar.innerHTML = `
            <button id="mobile-menu-btn" class="mobile-menu-btn">${icon('menu', 22)}</button>
            <div class="topbar-title">${title}</div>
            <div class="topbar-actions">
                <div class="topbar-search">
                    ${icon('search', 16)}
                    <input type="text" id="global-search" placeholder="Search..." class="topbar-search-input">
                </div>
                <button class="topbar-icon-btn" id="notif-btn" title="Notifications">
                    ${icon('notification', 18)}
                    <span class="notif-dot"></span>
                </button>
                <a href="monitors.html" class="topbar-icon-btn" title="Add Monitor" id="add-monitor-topbar">
                    ${icon('add', 18)}
                </a>
            </div>`;

        $('#mobile-menu-btn').addEventListener('click', () => {
            const sidebar = $('#sidebar');
            sidebar.classList.add('mobile-open');
            let overlay = $('.sidebar-overlay');
            if (!overlay) { overlay = document.createElement('div'); overlay.className = 'sidebar-overlay'; document.body.appendChild(overlay); }
            overlay.classList.add('active');
            overlay.onclick = () => { sidebar.classList.remove('mobile-open'); overlay.classList.remove('active'); };
        });

        $('#notif-btn').addEventListener('click', () => App.showToast('No new notifications', 'info'));
    }

    // ── Modal System ──────────────────────────────────────
    function bindModal() {
        const overlay = $('#modal-overlay');
        if (!overlay) return;
        const closeBtn = $('#modal-close');
        const cancelBtn = $('#modal-cancel');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    }

    function openModal(title, bodyHTML, onConfirm, confirmText = 'Confirm') {
        const overlay = $('#modal-overlay');
        $('#modal-title').textContent = title;
        $('#modal-body').innerHTML = bodyHTML;
        const confirmBtn = $('#modal-confirm');
        confirmBtn.textContent = confirmText;
        confirmBtn.onclick = () => { if (onConfirm) onConfirm(); closeModal(); };
        overlay.classList.add('active');
    }

    function closeModal() {
        const overlay = $('#modal-overlay');
        if (overlay) overlay.classList.remove('active');
    }

    // ── Toast System ──────────────────────────────────────
    function showToast(message, type = 'info') {
        const container = $('#toast-container');
        if (!container) return;

        const iconMap = {
            success: icon('check-circle', 20),
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M15 9L9 15M9 9l6 6" stroke-linecap="round"/></svg>',
            warning: icon('alert', 20),
            info: icon('alert-circle', 20),
        };

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<div class="toast-icon">${iconMap[type]}</div><div class="toast-message">${message}</div>`;
        container.appendChild(toast);
        setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, 3500);
    }

    // ── Chart Drawing (Light Theme) ───────────────────────
    function drawResponseChart(canvasId, baseValue = 140) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.parentElement.clientWidth - 44, h = 200;
        canvas.width = w * 2; canvas.height = h * 2;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.scale(2, 2);

        const points = 48;
        const data = Array.from({ length: points }, () => baseValue + (Math.random() - 0.5) * baseValue * 0.8);
        const max = Math.max(...data) * 1.2;
        const pad = { top: 20, right: 20, bottom: 30, left: 45 };
        const cW = w - pad.left - pad.right, cH = h - pad.top - pad.bottom;

        ctx.strokeStyle = '#f1f3f9'; ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = pad.top + (cH / 4) * i;
            ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
            ctx.fillStyle = '#9ca3af'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
            ctx.fillText(Math.round(max - (max / 4) * i) + 'ms', pad.left - 8, y + 4);
        }

        const gradient = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
        gradient.addColorStop(0, 'rgba(79,70,229,0.12)'); gradient.addColorStop(1, 'rgba(79,70,229,0)');
        ctx.beginPath();
        data.forEach((val, i) => { const x = pad.left + (cW / (points - 1)) * i, y = pad.top + cH - (val / max) * cH; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
        ctx.lineTo(pad.left + cW, pad.top + cH); ctx.lineTo(pad.left, pad.top + cH); ctx.closePath();
        ctx.fillStyle = gradient; ctx.fill();

        ctx.beginPath();
        data.forEach((val, i) => { const x = pad.left + (cW / (points - 1)) * i, y = pad.top + cH - (val / max) * cH; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
        ctx.strokeStyle = '#4f46e5'; ctx.lineWidth = 2; ctx.stroke();

        ctx.fillStyle = '#9ca3af'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
        ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'].forEach((label, i, arr) => {
            ctx.fillText(label, pad.left + (cW / (arr.length - 1)) * i, h - 8);
        });
    }

    function drawUptimeDonut(canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const size = Math.min(canvas.parentElement.clientWidth - 44, 220);
        canvas.width = size * 2; canvas.height = size * 2;
        canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
        ctx.scale(2, 2);

        const cx = size / 2, cy = size / 2, radius = size / 2 - 20;
        const up = DATA.monitors.filter(m => m.status === 'up').length;
        const down = DATA.monitors.filter(m => m.status === 'down').length;
        const paused = DATA.monitors.filter(m => m.status === 'paused').length;
        const total = DATA.monitors.length;

        const segments = [{ value: up, color: '#22c55e', label: 'Up' }, { value: down, color: '#ef4444', label: 'Down' }, { value: paused, color: '#f59e0b', label: 'Paused' }];
        let startAngle = -Math.PI / 2;
        segments.forEach(seg => {
            if (seg.value === 0) return;
            const sweep = (seg.value / total) * Math.PI * 2;
            ctx.beginPath(); ctx.arc(cx, cy, radius, startAngle, startAngle + sweep);
            ctx.strokeStyle = seg.color; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.stroke();
            startAngle += sweep + 0.05;
        });

        ctx.fillStyle = '#111827'; ctx.font = 'bold 24px Inter'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(up + '/' + total, cx, cy - 6);
        ctx.fillStyle = '#9ca3af'; ctx.font = '10px Inter'; ctx.fillText('monitors up', cx, cy + 18);
    }

    function drawBarChart(canvasId, yLabel, data, labels) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.parentElement.clientWidth - 44, h = 200;
        canvas.width = w * 2; canvas.height = h * 2;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.scale(2, 2);

        const max = Math.max(...data) * 1.2;
        const pad = { top: 20, right: 20, bottom: 30, left: 50 };
        const cW = w - pad.left - pad.right, cH = h - pad.top - pad.bottom;
        const barW = cW / data.length - 6;

        ctx.strokeStyle = '#f1f3f9';
        for (let i = 0; i <= 4; i++) {
            const y = pad.top + (cH / 4) * i;
            ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
            ctx.fillStyle = '#9ca3af'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
            ctx.fillText('$' + Math.round(max - (max / 4) * i), pad.left - 8, y + 4);
        }

        data.forEach((val, i) => {
            const x = pad.left + (cW / data.length) * i + 3;
            const barH = (val / max) * cH, y = pad.top + cH - barH;
            const grad = ctx.createLinearGradient(x, y, x, y + barH);
            grad.addColorStop(0, '#4f46e5'); grad.addColorStop(1, '#818cf8');
            ctx.fillStyle = grad; ctx.beginPath(); ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]); ctx.fill();
            ctx.fillStyle = '#9ca3af'; ctx.font = '9px Inter'; ctx.textAlign = 'center';
            ctx.fillText(labels[i], x + barW / 2, h - 8);
        });
    }

    function drawLineChart(canvasId, yLabel, data, labels) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.parentElement.clientWidth - 44, h = 200;
        canvas.width = w * 2; canvas.height = h * 2;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.scale(2, 2);

        const max = Math.max(...data) * 1.2;
        const pad = { top: 20, right: 20, bottom: 30, left: 40 };
        const cW = w - pad.left - pad.right, cH = h - pad.top - pad.bottom;

        ctx.strokeStyle = '#f1f3f9';
        for (let i = 0; i <= 4; i++) {
            const y = pad.top + (cH / 4) * i;
            ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
            ctx.fillStyle = '#9ca3af'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
            ctx.fillText(Math.round(max - (max / 4) * i), pad.left - 8, y + 4);
        }

        const gradient = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
        gradient.addColorStop(0, 'rgba(34,197,94,0.12)'); gradient.addColorStop(1, 'rgba(34,197,94,0)');
        ctx.beginPath();
        data.forEach((val, i) => { const x = pad.left + (cW / (data.length - 1)) * i, y = pad.top + cH - (val / max) * cH; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
        ctx.lineTo(pad.left + cW, pad.top + cH); ctx.lineTo(pad.left, pad.top + cH); ctx.closePath();
        ctx.fillStyle = gradient; ctx.fill();

        ctx.beginPath();
        data.forEach((val, i) => { const x = pad.left + (cW / (data.length - 1)) * i, y = pad.top + cH - (val / max) * cH; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
        ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2; ctx.stroke();

        data.forEach((val, i) => {
            const x = pad.left + (cW / (data.length - 1)) * i, y = pad.top + cH - (val / max) * cH;
            ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fillStyle = '#22c55e'; ctx.fill();
        });

        labels.forEach((label, i) => {
            ctx.fillStyle = '#9ca3af'; ctx.font = '9px Inter'; ctx.textAlign = 'center';
            ctx.fillText(label, pad.left + (cW / (labels.length - 1)) * i, h - 8);
        });
    }

    // ── Utility Functions ─────────────────────────────────
    function statCard(label, value, color, iconHTML, changeText, changeDir, cardClass) {
        return `<div class="stat-card ${cardClass || ''}">
            <div class="stat-icon ${color}">${iconHTML}</div>
            <div class="stat-value">${value}</div>
            <div class="stat-label">${label}</div>
            ${changeText ? `<div class="stat-change ${changeDir}"><span>${changeDir === 'up' ? '↑' : '↓'}</span> ${changeText}</div>` : ''}
        </div>`;
    }

    function svgIcon(name) { return icon(name, 20); }

    function uptimeBars(count = 30) {
        let h = '';
        for (let i = 0; i < count; i++) {
            const r = Math.random();
            h += `<div class="uptime-bar-segment ${r > 0.08 ? 'up' : r > 0.03 ? 'partial' : 'down'}" title="Day ${i + 1}"></div>`;
        }
        return h;
    }

    function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
    function initials(name) { return name.split(' ').map(n => n[0]).join('').toUpperCase(); }
    function colorFromName(name) {
        const colors = ['#4f46e5', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#3b82f6'];
        let h = 0; for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
        return colors[Math.abs(h) % colors.length];
    }

    function bindFilterTabs(containerId, callback) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.filter-tab').forEach(tab => {
            tab.onclick = () => {
                container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                callback(tab.dataset.filter);
            };
        });
    }

    // ── Init ──────────────────────────────────────────────
    function init(pageName) {
        const page = pageName || detectPage();
        buildSidebar(page);
        buildTopbar(page);
        bindModal();

        // Hydrate static icons
        document.querySelectorAll('.static-icon').forEach(el => {
            if (el.dataset.icon) {
                el.innerHTML = icon(el.dataset.icon, el.dataset.size || 20);
            }
        });
    }

    return {
        init, showToast, openModal, closeModal,
        drawResponseChart, drawUptimeDonut, drawBarChart, drawLineChart,
        statCard, svgIcon, icon, uptimeBars, capitalize, initials, colorFromName, bindFilterTabs,
        $, $$,
    };
})();

function showToast(msg, type) { App.showToast(msg, type); }
