import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { Icon } from '../Icon/Icon';

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
    collapsible: { control: 'boolean' },
    defaultCollapsed: { control: 'boolean' },
    logo: { control: 'text' },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <Icon icon="home" size="sm" />,
  },
  {
    label: 'Messages',
    href: '/messages',
    icon: <Icon icon="mail" size="sm" />,
    badge: '5',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <Icon icon="settings" size="sm" />,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <Icon icon="user" size="sm" />,
  },
];

export const Dark: Story = {
  args: {
    logo: 'Acme',
    items: sampleItems,
    activeHref: '/',
    variant: 'dark',
    collapsible: true,
    defaultCollapsed: false,
  },
};

export const Light: Story = {
  args: {
    logo: 'Acme',
    items: sampleItems,
    activeHref: '/messages',
    variant: 'light',
    collapsible: true,
    defaultCollapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    logo: 'Acme',
    items: sampleItems,
    activeHref: '/settings',
    variant: 'dark',
    collapsible: true,
    defaultCollapsed: true,
  },
};

export const WithLogoIcon: Story = {
  args: {
    logoIcon: <Icon icon="target" size="md" />,
    items: sampleItems,
    activeHref: '/profile',
    variant: 'light',
    collapsible: true,
    defaultCollapsed: false,
  },
};
