import { UpdateMonthAssetProps } from '@/api';
import convertKRW from '@/utils/convertKRW';
import handleNumericChange from '@/utils/handleNumericChange';
import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type FormProps = {
  year: number;
  month: number;
  data: Record<string, number>;
  handler: Record<string, (value: string) => void>;
  updateMonthAsset: ({ year, month, asset }: UpdateMonthAssetProps) => void;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-top: 2.4rem;

  label {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors['text-primary']};
  }

  button {
    margin-top: 4.8rem;
    margin-inline: auto;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    background-color: ${props => props.theme.colors['toss-blue']};
    font-size: ${props => props.theme.fontSize.lg};
  }
`;

const Legend = styled.p`
  text-align: right;
  color: ${props => props.theme.colors['text-secondary']};
  font-size: ${props => props.theme.fontSize.sm};
`;

const Form = ({ year, month, data, handler, updateMonthAsset }: FormProps) => {
  const navigate = useNavigate();
  const { dw, saving, investment, pension, debt } = data;
  const {
    changeDw,
    changeSaving,
    changeInvestment,
    changePension,
    changeDebt,
  } = handler;

  const [inputFocus, setInputFocus] = useState({
    dw: false,
    saving: false,
    investment: false,
    pension: false,
    debt: false,
  });

  const handleBlur = (field: string) => () => {
    setInputFocus({ ...inputFocus, [field]: false });
  };

  const handleFocus = (field: string) => () => {
    setInputFocus({ ...inputFocus, [field]: true });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    updateMonthAsset({
      year: String(year),
      month: String(month),
      asset: { dw, saving, investment, pension, debt },
    });

    alert('자산이 등록되었습니다.');

    navigate(`/assets?year=${year}`);
  };

  return (
    <StyledForm action='' onSubmit={handleSubmit}>
      <Legend>단위: 원</Legend>
      <label htmlFor='dw'>
        입출금
        <input
          id='dw'
          type='text'
          value={inputFocus.dw ? dw : convertKRW(dw)}
          onChange={handleNumericChange(changeDw)}
          onBlur={handleBlur('dw')}
          onFocus={handleFocus('dw')}
        />
      </label>
      <label htmlFor='saving'>
        저축
        <input
          id='saving'
          type='text'
          value={inputFocus.saving ? saving : convertKRW(saving)}
          onChange={handleNumericChange(changeSaving)}
          onBlur={handleBlur('saving')}
          onFocus={handleFocus('saving')}
        />
      </label>
      <label htmlFor='investment'>
        투자
        <input
          id='investment'
          type='text'
          value={inputFocus.investment ? investment : convertKRW(investment)}
          onChange={handleNumericChange(changeInvestment)}
          onBlur={handleBlur('investment')}
          onFocus={handleFocus('investment')}
        />
      </label>
      <label htmlFor='pension'>
        연금
        <input
          id='pension'
          type='text'
          value={inputFocus.pension ? pension : convertKRW(pension)}
          onChange={handleNumericChange(changePension)}
          onBlur={handleBlur('pension')}
          onFocus={handleFocus('pension')}
        />
      </label>
      <label htmlFor='debt'>
        부채
        <input
          id='debt'
          type='text'
          value={inputFocus.debt ? debt : convertKRW(debt)}
          onChange={handleNumericChange(changeDebt)}
          onBlur={handleBlur('debt')}
          onFocus={handleFocus('debt')}
        />
      </label>
      <button>등록</button>
    </StyledForm>
  );
};

export default Form;
