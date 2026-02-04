import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Catalog } from './Catalog';

const { mockSessions } = vi.hoisted(() => {
  return {
    mockSessions: [
      {
        id: '1',
        title: 'React Keynote',
        description: 'Deep dive into React',
        speaker: 'Dr. Sarah Chen',
        category: 'Keynote',
        day: 'Day 1',
        time: '10:00 AM',
        location: 'Hall A',
        details: {
            level: 'Advanced',
            tracks: ['Web']
        }
      },
      {
        id: '2',
        title: 'Vue Workshop',
        description: 'Hands-on with Vue',
        speaker: 'Marcus Rodriguez',
        category: 'Learning Lab',
        day: 'Day 2',
        time: '2:00 PM',
        location: 'Room 200',
        details: {
            level: 'Beginner',
            tracks: ['Web', 'Mobile']
        }
      },
      {
        id: '3',
        title: 'AI in 2026',
        description: 'Future of AI',
        speaker: 'Emily Watson',
        category: 'Breakout',
        day: 'Day 1',
        time: '11:00 AM',
        location: 'Hall B',
        details: {
            level: 'Intermediate',
            tracks: ['AI/ML']
        }
      }
    ]
  };
});

vi.mock('../data/sessions', () => ({
  SESSIONS: mockSessions
}));

describe('Catalog Page', () => {
  it('renders all sessions initially', () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
  });

  it('filters by search query (title)', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });

  it('filters by search query (speaker)', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'Marcus' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });

  it('filters by Day', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    // 0: Day, 1: Category, 2: Speaker, 3: Level, 4: Track
    const selects = screen.getAllByRole('combobox');
    const daySelect = selects[0]; 

    fireEvent.change(daySelect, { target: { value: 'Day 2' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });

  it('filters by Category', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const selects = screen.getAllByRole('combobox');
    const categorySelect = selects[1]; 

    fireEvent.change(categorySelect, { target: { value: 'Keynote' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('filters by Speaker', async () => {
    render(
        <MemoryRouter>
          <Catalog />
        </MemoryRouter>
      );
      const selects = screen.getAllByRole('combobox');
      const speakerSelect = selects[2]; 
  
      fireEvent.change(speakerSelect, { target: { value: 'Dr. Sarah Chen' } });
  
      expect(screen.getByText('React Keynote')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
      });
  });

  it('filters by Level', async () => {
    render(
        <MemoryRouter>
          <Catalog />
        </MemoryRouter>
      );
      const selects = screen.getAllByRole('combobox');
      const levelSelect = selects[3]; 
  
      fireEvent.change(levelSelect, { target: { value: 'Advanced' } });
  
      expect(screen.getByText('React Keynote')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
      });
  });

  it('filters by Track', async () => {
    render(
        <MemoryRouter>
          <Catalog />
        </MemoryRouter>
      );
      const selects = screen.getAllByRole('combobox');
      const trackSelect = selects[4]; 
  
      fireEvent.change(trackSelect, { target: { value: 'Mobile' } });
  
      expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
      });
  });

  it('shows no results message when no matches', () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'NonExistentTerm' } });

    expect(screen.getByText('No sessions found')).toBeInTheDocument();
    expect(screen.getByText('Showing 0 sessions')).toBeInTheDocument();
  });

  it('clears filters when clear button is clicked', async () => {
    render(
        <MemoryRouter initialEntries={['/catalog?q=NonExistentTerm']}>
            <Catalog />
        </MemoryRouter>
    );

    expect(screen.getByText('No sessions found')).toBeInTheDocument();
    const clearButtons = screen.getAllByText('Clear all filters');
    fireEvent.click(clearButtons[0]);
    
    await waitFor(() => {
        expect(screen.getByText('React Keynote')).toBeInTheDocument();
    });
  });
});