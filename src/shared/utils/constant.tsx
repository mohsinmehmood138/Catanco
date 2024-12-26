import {appImages} from '../theme/assets';
import {svgIcon} from '../../assets/svg';

export const PROFILE_TAB_CONTENT = [
  {
    tabsName: 'Manage Profile',
    tabsIcon: svgIcon.UserIcon,
    tabsRoute: 'ManageProfile',
  },
  {
    tabsName: 'FAQ’s',
    tabsIcon: svgIcon.UserIcon,
    tabsRoute: 'FAQS',
  },
  {
    tabsName: 'Terms & Condition',
    tabsIcon: svgIcon.UserIcon,
    tabsRoute: 'TermsAndCondition',
  },
  {
    tabsName: 'Privacy Policy',
    tabsIcon: svgIcon.UserIcon,
    tabsRoute: 'PrivacyProfile',
  },
  {
    tabsName: 'Notification',
    tabsIcon: svgIcon.NotificationIcon,
    tabsRoute: 'Notification',
  },
];

interface IntroSlidesTypes {
  key: number;
  title: string;
  info: string;
  image: string;
  gradientFirstColor: string;
  gradientSecondColor: string;
}

export const APP_INTRO_SLIDES: IntroSlidesTypes[] = [
  {
    key: 1,
    title: 'My Visit',
    info: 'Write details about feature A here. Write details about feature A here. Write details about feature A here.',
    image: appImages.feature1,
    gradientFirstColor: 'rgba(112, 193, 179, 1)',
    gradientSecondColor: 'rgba(112, 193, 179, 0.8)',
  },
  {
    key: 2,
    title: 'Scan QR',
    info: 'Write details about feature B here. Write details about feature B here. Write details about feature B here.',
    image: appImages.feature2,
    gradientFirstColor: 'rgba(178, 219, 191, 1)',
    gradientSecondColor: 'rgba(178, 219, 191, .8)',
  },
  {
    key: 3,
    title: 'Happy Customer',
    info: 'Write details about feature C here. Write details about feature C here. Write details about feature C here.',
    image: appImages.feature3,
    gradientFirstColor: 'rgba(112, 193, 179, 1)',
    gradientSecondColor: 'rgba(112, 193, 179, 0.8)',
  },
  {
    key: 4,
    title: 'Good Staff',
    info: 'Write details about feature A here. Write details about feature A here. Write details about feature A here.',
    image: appImages.feature4,
    gradientFirstColor: 'rgba(178, 219, 191, 1)',
    gradientSecondColor: 'rgba(178, 219, 191, .8)',
  },
];

export const TERMS_AND_CONDITION = [
  {
    text: 'Aliquam euismod sodales enim, eget gravida justo vestibulum ac. In semper nunc nisl, vitae sodales tortor pellentesque a. Vivamus sit amet leo hendrerit, faucibus turpis accumsan, consequat ante',
  },
  {
    heading: 'AUTHORITY',
    text: 'Fusce iaculis porttitor tristique. Pellentesque convallis egestas magna ut tempor. Nunc efficitur est eu odio interdum, non elementum enim facilisis. Cras tortor enim, volutpat eu efficitur sit amet, eleifend id quam. Praesent in velit et ligula mattis ornare. Aliquam vehicula turpis egestas nulla auctor, et efficitur erat elementum. Suspendisse sollicitudin, elit sed rutrum aliquam, neque purus tempor ligula, et auctor sapien diam vel ipsum. Sed viverra massa non tellus venenatis gravida. Vestibulum suscipit posuere risus, ac luctus enim vestibulum vitae. Nam non purus sit amet ex malesuada pulvinar eget ac urna. Suspendisse potenti. Quisque non facilisis ex.',
  },
  {
    heading: 'PURPOSE',
    text: 'Fusce iaculis porttitor tristique. Pellentesque convallis egestas magna ut tempor. Nunc efficitur est eu odio interdum, non elementum enim facilisis. Cras tortor enim, volutpat eu efficitur sit amet, eleifend id quam. Praesent in velit et ligula mattis ornare. Aliquam vehicula turpis egestas nulla auctor, et efficitur erat elementum. Suspendisse sollicitudin, elit sed rutrum aliquam, neque purus tempor ligula, et auctor sapien diam vel ipsum. Sed viverra massa non tellus venenatis gravida. Vestibulum suscipit posuere risus, ac luctus enim vestibulum vitae. Nam non purus sit amet ex malesuada pulvinar eget ac urna. Suspendisse potenti. Quisque non facilisis ex.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra consectetur luctus. Proin scelerisque erat eu efficitur pretium. Quisque elementum ligula in ante ultrices, a tempor lectus molestie. Cras tincidunt molestie tincidunt. Donec sit amet cursus turpis. Pellentesque eget eros dapibus, lacinia odio sit amet, aliquam sapien',
  },
];

export const FAQS_LIST_DATA = [
  {
    title: 'Question 1',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking .',
  },
  {
    title: 'Question 2',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking .',
  },
  {
    title: 'Question 3',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking .',
  },
  {
    title: 'Question 4',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking .',
  },
  {
    title: 'Question 5',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking .',
  },
];

export const TODAY_VISITOR_DATA = [
  {
    id: '1',
    header: ' Ketty Joseph',
    date: 'October 30, 2017',
    location: 'Great Falls, Maryland',
    time: '02:02 am 11:27 pm',
  },
  {
    id: '2',
    header: 'Consultation',
    date: 'October 30, 2017 ',
    location: 'Great Falls, Maryland',
    time: '02:02 am 11:27 pm',
  },
  {
    id: '3',
    header: 'Follow-up',
    date: 'October 30, 2017 ',
    location: 'Great Falls, Maryland',
    time: '02:02 am 11:27 pm',
  },
  {
    id: '4',
    header: 'Emergency Visit',
    date: 'October 30, 2017',
    location: 'Great Falls, Maryland',
    time: '10:00 AM',
  },
];
