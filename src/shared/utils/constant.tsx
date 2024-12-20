import {appImages} from '../theme/assets';
import Svg, {Path} from 'react-native-svg';
import {UserIcon, NotificationIcon} from '../../assets/svg';

export const PROFILE_TAB_CONTENT = [
  {
    tabsname: 'Manage Profile',
    tabsIcon: UserIcon,
    tabsRoute: 'ManageProfile',
  },
  {
    tabsname: 'FAQ’s',
    tabsIcon: UserIcon,
    tabsRoute: 'FAQS',
  },
  {
    tabsname: 'Terms & Condition',
    tabsIcon: UserIcon,
    tabsRoute: 'TermsAndCondition',
  },
  {
    tabsname: 'Privacy Policy',
    tabsIcon: UserIcon,
    tabsRoute: 'PrivacyProfile',
  },
  {
    tabsname: 'Notification',
    tabsIcon: NotificationIcon,
    tabsRoute: 'NotificationScreen',
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

interface RightIconProps {
  width: number | string;
  height: number | string;
  color: string;
}

export const RightIcon: React.FC<RightIconProps> = ({
  width = 24,
  height = 24,
  color = 'white',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 35 30"
      style={[
        {
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Path
        d="M27.4401 14.5868L18.1067 5.25344C17.5994 4.74851 16.8612 4.55258 16.1703 4.73946C15.4794 4.92634 14.9406 5.46764 14.757 6.15946C14.5733 6.85128 14.7727 7.58851 15.2801 8.09344L21.1867 13.9868H5.97339C4.86882 13.9868 3.97339 14.8822 3.97339 15.9868C3.97339 17.0913 4.86882 17.9868 5.97339 17.9868H21.1867L15.2801 23.8801C14.7088 24.4521 14.538 25.3117 14.8473 26.0586C15.1565 26.8055 15.885 27.2927 16.6934 27.2934C17.2301 27.2855 17.7405 27.0592 18.1067 26.6668L27.4401 17.3334C28.2199 16.5526 28.2199 15.2876 27.4401 14.5068V14.5868Z"
        fill={color}
      />
    </Svg>
  );
};

export const LeftIcon: React.FC<RightIconProps> = ({
  width = 24,
  height = 24,
  color = 'black',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Path
        d="M11.7493 19.4893C11.5523 19.4897 11.3626 19.4146 11.2193 19.2793L4.21934 12.2793C3.92689 11.9865 3.92689 11.5122 4.21934 11.2193L11.2193 4.21934C11.5122 3.92689 11.9865 3.92689 12.2793 4.21934C12.4223 4.35863 12.5029 4.54975 12.5029 4.74934C12.5029 4.94893 12.4223 5.14005 12.2793 5.27934L5.81934 11.7593L12.2693 18.2093C12.4123 18.3486 12.4929 18.5398 12.4929 18.7393C12.4929 18.9389 12.4123 19.1301 12.2693 19.2693C12.1339 19.4114 11.9456 19.491 11.7493 19.4893Z"
        fill={color}
      />
      <Path
        d="M19.7893 12.5093H4.78931C4.37509 12.5093 4.03931 12.1735 4.03931 11.7593C4.03931 11.3451 4.37509 11.0093 4.78931 11.0093H19.7893C20.2035 11.0093 20.5393 11.3451 20.5393 11.7593C20.5393 12.1735 20.2035 12.5093 19.7893 12.5093Z"
        fill={color}
      />
      <Path
        d="M11.7493 19.4893C11.5523 19.4897 11.3626 19.4146 11.2193 19.2793L4.21934 12.2793C3.92689 11.9865 3.92689 11.5122 4.21934 11.2193L11.2193 4.21934C11.5122 3.92689 11.9865 3.92689 12.2793 4.21934C12.4223 4.35863 12.5029 4.54975 12.5029 4.74934C12.5029 4.94893 12.4223 5.14005 12.2793 5.27934L5.81934 11.7593L12.2693 18.2093C12.4123 18.3486 12.4929 18.5398 12.4929 18.7393C12.4929 18.9389 12.4123 19.1301 12.2693 19.2693C12.1339 19.4114 11.9456 19.491 11.7493 19.4893Z"
        fill={color}
      />
      <Path
        d="M19.7893 12.5093H4.78931C4.37509 12.5093 4.03931 12.1735 4.03931 11.7593C4.03931 11.3451 4.37509 11.0093 4.78931 11.0093H19.7893C20.2035 11.0093 20.5393 11.3451 20.5393 11.7593C20.5393 12.1735 20.2035 12.5093 19.7893 12.5093Z"
        fill={color}
      />
    </Svg>
  );
};

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
