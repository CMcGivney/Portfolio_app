class Api::NotesController < ApplicationController
  before_action :authenticate_user!, :set_note, only: [:show, :update, :destroy ]
  
  def index
    render json: User.note.all
  end

  def show
    render json: @note
  end

  def create
    note = Note.new(note_params)
    if note.save
      render json: note
    else
      render json: note.errors, status: 422
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: 422
    end
  end

  def destroy
    @note.destroy
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:name, :body )
  end
end
