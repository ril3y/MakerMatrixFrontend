import { apiClient, ApiResponse, PaginatedResponse } from './api'
import { 
  Part, 
  CreatePartRequest, 
  UpdatePartRequest, 
  SearchPartsRequest 
} from '@/types/parts'

export class PartsService {
  async createPart(data: CreatePartRequest): Promise<Part> {
    const response = await apiClient.post<ApiResponse<Part>>('/parts/add_part', data)
    return response.data!
  }

  async getPart(id: string): Promise<Part> {
    const response = await apiClient.get<ApiResponse<Part>>(`/parts/get_part?id=${id}`)
    return response.data!
  }

  async getPartByName(name: string): Promise<Part> {
    const response = await apiClient.get<ApiResponse<Part>>(`/parts/get_part?name=${name}`)
    return response.data!
  }

  async getPartByNumber(partNumber: string): Promise<Part> {
    const response = await apiClient.get<ApiResponse<Part>>(`/parts/get_part?part_number=${partNumber}`)
    return response.data!
  }

  async updatePart(data: UpdatePartRequest): Promise<Part> {
    const { id, ...updateData } = data
    const response = await apiClient.put<ApiResponse<Part>>(`/parts/update_part/${id}`, updateData)
    return response.data!
  }

  async deletePart(id: string): Promise<ApiResponse> {
    return await apiClient.delete<ApiResponse>(`/parts/delete_part?id=${id}`)
  }

  async getAllParts(page = 1, pageSize = 20): Promise<PaginatedResponse<Part>> {
    const response = await apiClient.get<PaginatedResponse<Part>>('/parts/get_all_parts', {
      params: { page, page_size: pageSize }
    })
    return response
  }

  async searchParts(params: SearchPartsRequest): Promise<PaginatedResponse<Part>> {
    const response = await apiClient.post<PaginatedResponse<Part>>('/parts/search', params)
    return response
  }

  async checkNameExists(name: string, excludeId?: string): Promise<boolean> {
    try {
      const response = await apiClient.get<ApiResponse<boolean>>('/parts/check_name_exists', {
        params: { name, exclude_id: excludeId }
      })
      return response.data || false
    } catch {
      return false
    }
  }

  async importFromSupplier(supplier: string, url: string): Promise<Part> {
    const response = await apiClient.post<ApiResponse<Part>>('/parts/import', {
      supplier,
      url
    })
    return response.data!
  }
}

export const partsService = new PartsService()