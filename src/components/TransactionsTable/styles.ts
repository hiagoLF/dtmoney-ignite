import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tr {
      position: relative;
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    button {
      position: absolute;
      right: 0;
      height: 100%;
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.5;
      transition: opacity 0.3s;
      padding-right: 0.5rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
