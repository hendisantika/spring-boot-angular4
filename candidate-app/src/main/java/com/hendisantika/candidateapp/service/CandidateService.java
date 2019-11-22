package com.hendisantika.candidateapp.service;

import com.hendisantika.candidateapp.entity.Candidate;
import com.hendisantika.candidateapp.repository.CandidateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * Created by IntelliJ IDEA.
 * Project : candidate-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 03/11/17
 * Time: 05.38
 * To change this template use File | Settings | File Templates.
 */

@Service("candidateService")
@Transactional
public class CandidateService {
    @Autowired
    private CandidateRepo repo;

    public Candidate insert(Candidate candidate) {
        return repo.save(candidate);
    }

    public Optional<Candidate> findById(String id) {
        return repo.findById(id);
    }

    public List<Candidate> findAll() {
        return repo.findAllCandidate();
    }

    public List<Candidate> findByName(String name) {
        return repo.findByName("%" + name + "%");
    }

    public boolean delete(String id) {
        repo.deleteById(id);
        return true;
    }

}
