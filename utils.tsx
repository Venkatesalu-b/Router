import { faDatabase, faGearComplexCode, faPenRuler } from "@fortawesome/pro-light-svg-icons";
import { ReactComponent as TrashCanIcon } from "../views/images/trashCan.svg";

export const ROOT_RECORDS_ROUTE = '/new/records/';
export const RECORDS_ROUTE = '/records';
export const ROOT_ROUTE = '/new';
export const UI_ROUTE = '/ui';
export const CUSTOM_UI_ROUTE = '/custompages'
export const CUSTOM_PAGES = '/new/ui/custompages/'
export const CUSTOM_PAGEEDITOR = '/new/ui/custompages/'
export const SHARED_ROUTE = '/shared';
export const ASSET_SUBMENU = [
    {
        label: 'Settings',
        path: '',
    },
    {
        label: 'Properties',
        path: 'properties',
    },
    {
        label: 'Commands',
        path: 'commands',
    },
    {
        label: 'Events',
        path: 'events',
    },
    {
        label: 'Computed Mapping',
        path: 'computedMapping',
    },
];

export const MAIN_MENU = [
    {
        icon: faDatabase,
        label: 'Records',
        path: `${ROOT_ROUTE}${RECORDS_ROUTE}`,
    },
    {
        icon: faPenRuler,
        label: 'UI',
        path: `${ROOT_ROUTE}${UI_ROUTE}`,
    },
    {
        icon: faGearComplexCode,
        label: 'Shared Utilities',
        path: `${ROOT_ROUTE}${SHARED_ROUTE}`,
    },
];
export const UI_MENU = [
    {
        label:'Settings'
    },
    {
        label:'Asset UI'
    },
    {
        label:'Actions'
    },
    {
        label:'Custom Pages',
        path:`${ROOT_ROUTE}${UI_ROUTE}${CUSTOM_UI_ROUTE}`
    }
]
export const MENU_BUTTONS = [
    {
        icon: 'fa-regular fa-circle-question',
        label: 'Help',
    },
    {
        icon: "fa-light fa-file-circle-plus",
        label: 'Note',
    },
];

export const tempColumns = [
    { key: 'Action', label: 'Action' },
    { key: 'names', label: 'Name' },
    { key: 'label', label: 'Label' },
    { key: 'type', label: 'Type' },
    { key: 'editable', label: 'Editable' },
    { key: 'relation', label: 'Relation' },
    { key: 'nullable', label: 'Nullable' },
    { key: 'foreignColumns', label: 'Foreign Columns' },
];
export const column = [
    { key: 'Action', label: 'Action', type: 'text' },
    { key: 'names', label: 'Name', type: 'text' },
    { key: 'label', label: 'Label', type: 'text' },
    {
        key: 'type',
        label: 'Type',
        type: 'select',
        childern: [
            {
                label: 'Number',
            },
            {
                label: 'String',
            },
            {
                label: 'Id',
            },
        ],
    },
    { key: 'editable', label: 'Editable', value: true, type: 'text' },
    { key: 'nullable', label: 'Nullable', value: true, type: 'text' },
    { key: 'filterable', label: 'Filterable', value: true, type: 'text' },
    { key: 'relation', label: 'Relation', type: 'select' },
    { key: 'foreignColumns', label: 'Foreign Columns', type: 'select' },
];
export const repeatColumns = [...tempColumns, ...tempColumns];

export const mainTabs = [
    {
        label: 'General',
    },
    {
        label: 'Permission',
    },
];
export const namingItems: Array<{
    label: string;
    type: string;
}> = [
    {
        label: 'Name',
        type: 'text',
    },
    {
        label: 'Singular Name',
        type: 'text',
    },
    {
        label: 'Plural Name',
        type: 'text',
    },
    {
        label: 'Label Property',
        type: 'dropdown',
    },
];
export const locationItems: Array<{
    label: string;
}> = [
    {
        label: 'Type',
    },
    {
        label: 'Latitude',
    },
    {
        label: 'Longitude',
    },
];

export const advancedOptions: Array<{
    title: string;
    description: string;
    status: boolean;
}> = [
    {
        title: 'Replay events on startup',
        description:
            'Enabling this will we denounce with righteous indignation and dislike men who are so beguiled.',
        status: true,
    },
    {
        title: 'Is Reference Type (Project agonstic)',
        description:
            'Enabling this will we denounce with righteous indignation and dislike men who are so beguiled.',
        status: true,
    },
];

export const tableRows = [
    createData('1', TrashCanIcon, '', '', '45b3b2f4-7bdb-4fd4-980e-2a2d4b75fac1'),
    createData('2', TrashCanIcon, '', '', '45b3b2f4-7bdb-4fd4-980e-2a2d4b75fac1'),
    createData('3', TrashCanIcon, '', '', '45b3b2f4-7bdb-4fd4-980e-2a2d4b75fac1'),
    createData('4', TrashCanIcon, '', '', '45b3b2f4-7bdb-4fd4-980e-2a2d4b75fac1'),
];

function createData(
    key: string,
    action: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    attribute: string,
    type: string,
    userId: string
) {
    return { key, action, attribute, type, userId };
}

export const getUrlFirstParam = (path: string, ignorePath: string) => {
    const requiredPath = path.replace(ignorePath, '');
    const slashPos = requiredPath.indexOf('/');
    return requiredPath.substr(0, slashPos === -1 ? requiredPath.length : slashPos);
};