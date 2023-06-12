import { render, screen } from '@testing-library/react';
import React from 'react';
import SpecTable from './SpecTable';

describe('SpecTable', () => {
  const mockDevice = {
    line: { name: 'Product Line 1', id: '12345' },
    product: { name: 'Device 1' },
    shortnames: ['Short Name 1'],
    icon: { id: 'icon1' },
    unifi: { adoptability: 'Adoptable', protect: { fov: 'FOV Value' } },
    fcc: 'FCC Value',
    ic: 'IC Value',
    usip: {
      nameLegacy: 'Legacy Name',
      firmware: { platform: 'Platform', board: 'Board' },
    },
  };

  it('renders the device image', () => {
    render(<SpecTable device={mockDevice} />);

    const deviceImage = screen.getByAltText('Device 1');
    expect(deviceImage).toBeInTheDocument();
    expect(deviceImage).toHaveAttribute(
      'src',
      'https://static.ui.com/fingerprint/ui/icons/icon1_257x257.png'
    );
  });

  it('renders the device specifications', () => {
    render(<SpecTable device={mockDevice} />);

    expect(screen.getByText('Product line')).toBeInTheDocument();
    expect(screen.getByText('Product Line 1')).toBeInTheDocument();

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Device 1')).toBeInTheDocument();

    expect(screen.getByText('Short name')).toBeInTheDocument();
    expect(screen.getByText('Short Name 1')).toBeInTheDocument();

    expect(screen.getByText('Adoptability')).toBeInTheDocument();
    expect(screen.getByText('Adoptable')).toBeInTheDocument();

    expect(screen.getByText('Protect (FOV)')).toBeInTheDocument();
    expect(screen.getByText('FOV Value')).toBeInTheDocument();

    expect(screen.getByText('FCC')).toBeInTheDocument();
    expect(screen.getByText('FCC Value')).toBeInTheDocument();

    expect(screen.getByText('IC')).toBeInTheDocument();
    expect(screen.getByText('IC Value')).toBeInTheDocument();

    expect(screen.getByText('Name Legacy')).toBeInTheDocument();
    expect(screen.getByText('Legacy Name')).toBeInTheDocument();

    expect(screen.getByText('Firmware Platform')).toBeInTheDocument();
    expect(screen.getByText('Platform')).toBeInTheDocument();

    expect(screen.getByText('Firmware Board')).toBeInTheDocument();
    expect(screen.getByText('Board')).toBeInTheDocument();
  });
});

export { };

